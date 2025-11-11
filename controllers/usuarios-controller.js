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
        const {nome, email, senha, tipo_usuario, descricao} = req.body;
        try {
            if (!nome || !email || !senha || !tipo_usuario) {
                return res.status(400).json
                ({error: 'Nome, email, senha e o tipo do usuário são obrigatórios. '})
            }

            //Chama a função responsável pela criação do usuário
            const criarUsuario = await usuarioModel.criar_usuario(nome, email, senha , tipo_usuario, descricao);

            if (criarUsuario) {
                return res.status(201).json({
                    message: 'Usuário criado com sucesso.',
                });
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

    criar_empresa: async (req, res) => {
        const {id_usuario, cnpj, razao_social, site} = req.body;
        try {
            if(!id_usuario || !cnpj || !razao_social){
                return res.status(400).json({
                    error: 'Informe os dados necessários.'
                });
            }

            const criarEmpresa = await usuarioModel.criar_empresa(id_usuario, cnpj, razao_social, site);

             if (criarEmpresa) {
                return res.status(201).json({
                    message: 'Empresa cadastrada com sucesso.',
                });
            } else {
                return res.status(500).json({
                    error: 'Erro ao cadastrar empresa.'
                });
            }

        } catch (error) {

            //Tratamento dos erros vindos do banco
            switch(error.code){
                case 'ER_DUP_ENTRY':
                   return res.status(409).json({
                        Error: 'Já existe uma empresa com esse ID.'
                    });

                case 'ER_NO_REFERENCED_ROW_2':
                   return res.status(409).json({
                        Error: 'Erro de integridade: chave estrangeira inválida ou inexistente.'
                    });
                
                case 'INTERNAL ERROR':
                    default:
                       return res.status(500).json({
                            Error: 'Erro interno no servidor.'
                        });
            }
        }
    },

    criar_candidato: async(req, res) => {
        const {id_usuario, cpf, curriculo_link, descricao_pessoal} = req.body;
        try {
            if(!id_usuario || !cpf || !curriculo_link || !descricao_pessoal){
                return res.status(400).json({
                    error: 'ID, CPF, currrículo e descrição profissional são obrigatórios.'
                });
            }

            const criarCandidato = usuarioModel.criar_candidato(id_usuario, cpf, curriculo_link, descricao_pessoal);
            
            if(criarCandidato){
                res.status(201).json({
                    message: 'Candidato cadastrado com sucesso.'
                })
            } else {
                return res.status(500).json({
                    error: 'Erro ao cadastrar o candidato.'
                })
            }
        } catch (error) {

            //Tratamento dos erros vindos do banco
            switch(error.code){
                case 'ER_DUP_ENTRY':
                   return res.status(409).json({
                        Error: 'Já existe um usuário com esse identificador.'
                    });

                case 'ER_NO_REFERENCED_ROW_2':
                   return res.status(409).json({
                        Error: 'Erro de integridade: chave estrangeira inválida ou inexistente.'
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
        const {email, senha} = req.body;

        try {
            if(!email || !senha){
                return res.status(400).json
                ({error: 'Email e senha e são obrigatórios. '});
            }

            const usuario = await usuarioModel.verificarEmail(email);

             if (!usuario || usuario.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
            }
            const usuarioEncontrado = usuario[0];

             if(senha !== usuarioEncontrado.senha){
                return res.status(401).json({message: 'Email ou senha incorretos.'})
            }

            req.session.user = {
                id: usuarioEncontrado.id_usuario,
                email: usuarioEncontrado.email,
                tipo: usuarioEncontrado.tipo_usuario
            }

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
    }
};