const vagasModel = require('../models/vagas-model.js');

module.exports = {
    buscar_vagas_por_empresa: async (req, res) => {
        const { id } = req.params;
        try {
            const vagas = await vagasModel.buscar_vagas_por_empresa(id);

            if (vagas[0].length > 0) {
                return res.status(200).json(vagas[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma vaga encontrada para a empresa informada.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },
    buscar_vaga_por_id: async (req, res) => {
        const { id } = req.params;
        try {
            const vaga = await vagasModel.buscar_vaga_por_id(id);

            if (vaga[0].length > 0) {
                return res.status(200).json(vaga[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma vaga encontrada para o id informado.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    criar_vaga: async (req, res) => {
        const { id_empresa, titulo, descricao, localizacao, modalidade, salario } = req.body;
        try {
            const vaga = await vagasModel.criar_vaga(id_empresa, titulo, descricao, localizacao, modalidade, salario);
            return res.status(201).json({ message: 'Vaga criada com sucesso.', vaga });
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    buscar_vagas_aleatorias: async (req, res) => {
        try {
            const vagas = await vagasModel.buscar_vagas_aleatorias();

            if (vagas[0].length > 0) {
                return res.status(200).json(vagas[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma vaga encontrada.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    buscar_vagas_por_habilidades: async (req, res) => {
        const { habilidades } = req.query;
        try {
            const vagas = await vagasModel.buscar_vagas_por_habilidades(habilidades);

            if (vagas[0].length > 0) {
                return res.status(200).json(vagas[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma vaga encontrada para as habilidades informadas.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    }
};