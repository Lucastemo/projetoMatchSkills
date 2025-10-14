const usuarioModel = require('../models/usuarios-model');

const usuarioController = {
    criar_usuario: async (req, res) => {
        const {nome, email, senha, tipo_usuario} = req.body;
        try {
            if (!nome || !email || !senha || !tipo_usuario) {
                return res.status(400).json
                ({error: 'Nome, email, senha e o tipo do usuário são obrigatórios. '})
            }

            //Chama a função responsável pela criação do usuário
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
    }
};

module.exports = usuarioController;