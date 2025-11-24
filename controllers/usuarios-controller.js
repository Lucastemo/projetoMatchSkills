require('dotenv').config();
const usuarioModel = require('../models/usuarios-model.js');
const multer = require('multer');
const path = require('path');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configuração do multer para upload de imagens
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'fotos-perfil',
        allowed_formats: ['jpg', 'jpeg', 'png'],
        public_id: (req, file) => 'foto-' + Date.now(),
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
});

module.exports = {
    upload, // Exportando o middleware de upload

    registrar_usuario: async (req, res) => {
        const {
            tipo_usuario, nome, cpf, razao_social, cnpj, email, senha,
            descricao = null, curriculo_link = null, site = null, setor = null, local = null, tamanho = null
        } = req.body;

        // Validação de entrada básica
        if (!tipo_usuario || !email || !senha) {
            return res.status(400).json({ error: 'Tipo de usuário, email e senha são obrigatórios.' });
        }

        try {
            if (tipo_usuario === 'candidato') {
                if (!nome || !cpf) {
                    return res.status(400).json({ error: 'Nome e CPF são obrigatórios para candidatos.' });
                }
                await usuarioModel.registrar_candidato(nome, email, senha, cpf, descricao, curriculo_link);
                res.status(201).json({ message: 'Candidato registrado com sucesso!' });
            
            } else if (tipo_usuario === 'empresa') {
                if (!razao_social || !cnpj) {
                    return res.status(400).json({ error: 'Razão Social e CNPJ são obrigatórios para empresas.' });
                }
                await usuarioModel.registrar_empresa(razao_social, email, senha, cnpj, descricao, site, setor, local, tamanho);
                res.status(201).json({ message: 'Empresa registrada com sucesso!' });
            
            } else {
                return res.status(400).json({ error: 'Tipo de usuário inválido.' });
            }

        } catch (error) {
            console.error('Erro no controller ao registrar usuário:', error);
            if (error.code === 'ER_DUP_ENTRY') {
                if (error.message.includes('email')) {
                    return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
                }
                if (error.message.includes('cpf')) {
                    return res.status(409).json({ error: 'Este CPF já está cadastrado.' });
                }
                if (error.message.includes('cnpj')) {
                    return res.status(409).json({ error: 'Este CNPJ já está cadastrado.' });
                }
                if (error.message.includes('razao_social')) {
                    return res.status(409).json({ error: 'Esta Razão Social já está cadastrada.' });
                }
            }
            return res.status(500).json({ error: 'Ocorreu um erro interno ao tentar registrar o usuário.' });
        }
    },

    verificarLogin: async(req, res) => {
        const { email, senha, tipoLogin } = req.body;

        try {
            if (!email || !senha || !tipoLogin) {
                return res.status(400).json({ message: 'Email, senha e tipo de login são obrigatórios.' });
            }

            const usuario = await usuarioModel.buscar_usuario_por_email(email);

            if (!usuario || usuario.senha !== senha) {
                return res.status(401).json({ message: 'Email ou senha incorretos.' });
            }

            if (usuario.tipo_usuario !== tipoLogin) {
                return res.status(403).json({ message: `Acesso negado. Esta conta é do tipo "${usuario.tipo_usuario}".` });
            }

            req.session.user = {
                id: usuario.id_usuario,
                email: usuario.email,
                tipo: usuario.tipo_usuario,
                nome: usuario.nome,
                foto: usuario.foto
            };

            return res.status(200).json({ auth: true, message: 'Login bem-sucedido!' });
            
        } catch (error) {
        console.error('Erro durante o login:', error);
        return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    },

    logout: (req, res) => {
        req.session.destroy(err => {
            if(err){
                return res.status(500).json({message: 'Erro ao encerrar a sessão.'})};
            res.clearCookie('connect.sid');
            res.status(200).json({ message: 'Logout realizado com sucesso.' });
        })
    },

    atualizar_foto_usuario: async (req, res) => {
        const { id_usuario } = req.body;
        const foto_url = req.file ? req.file.path : null; // URL from Cloudinary
        const foto_public_id = req.file ? req.file.filename : null; // public_id from Cloudinary

        try {
            if (!id_usuario || !foto_url) {
                return res.status(400).json({ error: 'ID do usuário e foto são obrigatórios.' });
            }

            // Buscar a foto antiga para deletar do Cloudinary
            const fotoAntiga = await usuarioModel.buscar_foto_por_id(id_usuario);

            if (fotoAntiga && fotoAntiga.foto_public_id) {
                await cloudinary.uploader.destroy(fotoAntiga.foto_public_id);
            }

            const atualizarFoto = await usuarioModel.atualizar_foto_usuario(id_usuario, foto_url, foto_public_id);

            if (atualizarFoto) {
                // Atualiza a sessão do usuário se ele estiver logado
                if (req.session.user && req.session.user.id == id_usuario) {
                    req.session.user.foto = foto_url;
                    req.session.save(); // Salva as alterações na sessão
                }
                return res.status(200).json({
                    message: 'Foto do usuário atualizada com sucesso.',
                    foto_url: foto_url,
                    user: req.session.user
                });
            } else {
                return res.status(500).json({
                    error: 'Erro ao atualizar a foto do usuário.'
                });
            }
        } catch (error) {
            console.error('Erro ao atualizar a foto do usuário:', error);
            // Se o upload para o Cloudinary falhou, o multer-storage-cloudinary não deixa o arquivo lá,
            // mas se o erro for no banco, precisamos deletar o que acabamos de subir.
            if (foto_public_id) {
                await cloudinary.uploader.destroy(foto_public_id);
            }
            return res.status(500).json({
                error: 'Erro interno no servidor.'
            });
        }
    },

    verificar_usuario_premium_por_id: async (req, res) => {
        const { id } = req.params;
        try {
            const premiumStatus = await usuarioModel.verificar_usuario_premium_por_id(id);

            if (premiumStatus[0] && premiumStatus[0].length > 0) {
                return res.status(200).json(premiumStatus[0][0]);
            } else {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao verificar status premium do usuário:', error);
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    tornar_usuario_premium_por_id: async (req, res) => {
        const { id } = req.params;
        try {
            const success = await usuarioModel.tornar_usuario_premium_por_id(id);

            if (success) {
                return res.status(200).json({ message: 'Usuário agora é premium.' });
            } else {
                return res.status(404).json({ message: 'Usuário não encontrado ou já é premium.' });
            }
        } catch (error) {
            console.error('Erro ao tornar usuário premium:', error);
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    remover_premium_usuario_por_id: async (req, res) => {
        const { id } = req.params;
        try {
            const success = await usuarioModel.remover_premium_usuario_por_id(id);

            if (success) {
                return res.status(200).json({ message: 'Premium do usuário removido.' });
            } else {
                return res.status(404).json({ message: 'Usuário não encontrado ou não era premium.' });
            }
        } catch (error) {
            console.error('Erro ao remover premium do usuário:', error);
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    }
};