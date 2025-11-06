const empresaModel = require('../models/empresas-model.js');

module.exports = {
    buscar_empresas_por_nome: async (req, res) => {
        const { nome } = req.query;
        try {
            if (!nome) {
                return res.status(400).json({ error: 'O nome da empresa é obrigatório.' });
            }

            const empresas = await empresaModel.buscar_empresas_por_nome(nome);

            if (empresas[0].length > 0) {
                return res.status(200).json(empresas[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma empresa encontrada com o nome informado.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    buscar_empresa_por_id: async (req, res) => {
        const { id } = req.params;
        try {
            const empresa = await empresaModel.buscar_empresa_por_id(id);

            if (empresa[0].length > 0) {
                return res.status(200).json(empresa[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma empresa encontrada com o ID informado.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    },

    buscar_empresas_aleatorias: async (req, res) => {
        try {
            const empresas = await empresaModel.buscar_empresas_aleatorias();

            if (empresas[0].length > 0) {
                return res.status(200).json(empresas[0]);
            } else {
                return res.status(404).json({ message: 'Nenhuma empresa encontrada.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    }
};
