const usuarioModel = require('../models/usuarios-model.js');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/fotos-perfil/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = {
    upload, // Exportando o middleware de upload
    criar_usuario: async (req, res) => {
        const {
            nome, email, senha, tipo_usuario, descricao = null, // Dados comuns
            cpf, curriculo_link = null, // Dados do candidato
            cnpj, razao_social, site = null, setor = null, local = null, tamanho = null} = req.body; // Dados da empresa 

        try {
             // Verifica se os campos obrigatórios foram informados
            if (!nome || !email || !senha || !tipo_usuario) {
                return res.status(400).json
                ({error: 'Nome, email, senha e o tipo do usuário são obrigatórios. '})
            }

            // Cria o usuário base (na tabela "usuarios")
            const usuarioCriado = await usuarioModel.criar_usuario(nome, email, senha , tipo_usuario, descricao);
            const id_usuario = usuarioCriado.id_usuario

            // Se o usuário cadastrado for do tipo candidato
            if (usuarioCriado.tipo_usuario === 'candidato') {
                try {
                    if (!id_usuario || !cpf) {
                        return res.status(400).json({ error: 'id_usuario e cpf são obrigatórios.' });
                    }
                    // Chama a função responsável pela criação do candidato
                    const criarCandidato = await usuarioModel.criar_candidato(id_usuario, cpf, curriculo_link);
                           if (criarCandidato) {
                                return res.status(201).json({
                                message: 'Candidato(a) criado(a) com sucesso.'});
                            } else {
                                return res.status(500).json({
                                    error: 'Erro ao cadastrar candidato(a).'
                                });
                            }
                } catch (error) {
                    return res.status(500).json({
                    error: 'Erro ao criar candidato(a).'});
                }

            // Se o usuário cadastrado for do tipo empresa
            } else if(usuarioCriado.tipo_usuario === 'empresa'){
                const id_empresa = id_usuario;
                try {
                    if(!id_usuario || !razao_social || !cnpj){
                        return res.status(400).json({error: 'id_usuario, razao_social e cnpj são obrigatórios.'});
                    }
                     // Chama a função responsável pela criação da empresa
                    const criarEmpresa = await usuarioModel.criar_empresa(id_empresa, cnpj, razao_social, site, setor, local, tamanho) ;
                           if (criarEmpresa) {
                                return res.status(201).json({
                                message: 'Empresa criada com sucesso.'});
                            } else {
                                return res.status(500).json({
                                    error: 'Erro ao cadastrar empresa.'
                                });
                            }
                } catch (error) {
                    return res.status(500).json({
                    error: 'Erro ao criar empresa.'});
                }
                
            } else {
                return res.status(500).json({
                    error: 'Erro ao criar usuário.'
                });
            }

        } catch (error) {
            switch(error.code){
                case 'ER_DUP_ENTRY':
                   return res.status(409).json({
                        Error: 'Já existe um usuário com esse email.'
                    });

                case 'INTERNAL ERROR':
                    default:
                       return res.status(500).json({
                            Error: 'Erro interno no servidor.'
                        });
            }
        }
    },

    verificarLogin: async(req, res) => {
        const {email, senha, tipoCandidato} = req.body;

        try {
            // Verifica se os campos obrigatórios foram informados
            if(!email || !senha || !tipoCandidato){
                return res.status(400).json
                ({error: 'Email, senha e tipo de login são obrigatórios.'});
            }

            // Busca o usuário pelo email
            const usuario = await usuarioModel.verificarEmail(email);

             if (!usuario || usuario.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
            }
            const usuarioEncontrado = usuario[0];

            // Verifica se o tipo de login bate com o tipo do usuário no banco
            if (usuarioEncontrado.tipo_usuario !== tipoCandidato) {
                return res.status(403).json({
                message: `Acesso negado: esta conta é do tipo "${usuarioEncontrado.tipo_usuario}".`
                });
            }

             if(senha !== usuarioEncontrado.senha){
                return res.status(401).json({message: 'Email ou senha incorretos.'})
            }

            // Cria sessão
            req.session.user = {
            id: usuarioEncontrado.id_usuario,
            email: usuarioEncontrado.email,
            tipo: usuarioEncontrado.tipo_usuario,
            nome: usuarioEncontrado.nome
            };

            // Retorna sucesso
            return res.status(200).json({
            auth: true,
            nome: usuarioEncontrado.nome,
            tipo: usuarioEncontrado.tipo_usuario
            });
            
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
        const foto_url = req.file ? `img/fotos-perfil/${req.file.filename}` : null;

        try {
            if (!id_usuario || !foto_url) {
                return res.status(400).json({ error: 'ID do usuário e foto são obrigatórios.' });
            }

            // Buscar a foto antiga para deletar
            const fotoAntiga = await usuarioModel.buscar_foto_por_usuario(id_usuario);

            if (fotoAntiga) {
                const caminhoFotoAntiga = path.join(__dirname, '..', 'public', fotoAntiga);
                fs.unlink(caminhoFotoAntiga, (err) => {
                    if (err) {
                        // Log do erro, mas não impede a atualização da nova foto
                        console.error('Erro ao deletar a foto antiga:', err);
                    }
                });
            }
            const atualizarFoto = await usuarioModel.atualizar_foto_usuario(id_usuario, foto_url);

            if (atualizarFoto) {
                return res.status(200).json({
                    message: 'Foto do usuário atualizada com sucesso.',
                    foto_url: foto_url
                });
            } else {
                return res.status(500).json({
                    error: 'Erro ao atualizar a foto do usuário.'
                });
            }
        } catch (error) {
            console.error('Erro ao atualizar a foto do usuário:', error);
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
    }
};