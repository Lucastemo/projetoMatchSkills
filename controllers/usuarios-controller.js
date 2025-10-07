const usuarioModel = require('../models/usuarios-model');

const usuarioController = {
    criar_usuario: async (req, res) => {
        const {nome, email, senha, tipo_usuario} = req.body;
        try {
            if (!nome || !email || !senha || !tipo_usuario) {
                return res.status(400).json
                ({error: 'Nome, email, senha e o tipo do usuário são obrigatórios. '})
            }

            const criarUsuario = await usuarioModel.criar_usuario(nome, email, senha , tipo_usuario);

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
            console.error('Erro ao criar usuário.', error);
        }
    },

    criar_empresa: async (req, res) => {
        const {id_usuario, cnpj, razao_social, site} = req.body;
        try {
            
        } catch (error) {
            
        }
    }
};

module.exports = usuarioController;