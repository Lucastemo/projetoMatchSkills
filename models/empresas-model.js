const db = require('../config/db.js');

const empresaModel = {
    buscar_empresas_por_nome: async (nome) => {
        try {
            const sql = 'CALL buscar_empresas_por_nome(?)';
            const [empresas] = await db.execute(sql, [nome]);
            return empresas;
        } catch (error) {
            console.log('Erro ao buscar empresas por nome.', error);
            throw error;
        }
    },

    buscar_empresa_por_id: async (id) => {
        try {
            const sql = 'CALL buscar_empresa_por_id(?)';
            const [empresa] = await db.execute(sql, [id]);
            return empresa;
        } catch (error) {
            console.log('Erro ao buscar empresa por id.', error);
            throw error;
        }
    },

    buscar_empresas_aleatorias: async () => {
        try {
            const sql = 'CALL buscar_empresas_aleatorias()';
            const [empresas] = await db.execute(sql);
            return empresas;
        } catch (error) {
            console.log('Erro ao buscar empresas aleatórias.', error);
            throw error;
        }
    }
};

module.exports = empresaModel;
