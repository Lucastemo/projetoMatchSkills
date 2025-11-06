const db = require('../config/db.js');

const vagasModel = {
    buscar_vagas_por_empresa: async (id) => {
        try {
            const sql = 'CALL buscar_vagas_por_empresa(?)';
            const [vagas] = await db.execute(sql, [id]);
            return vagas;
        } catch (error) {
            console.log('Erro ao buscar vagas por empresa.', error);
            throw error;
        }
    },
    buscar_vaga_por_id: async (id) => {
        try {
            const sql = 'CALL buscar_vaga_por_id(?)';
            const [vaga] = await db.execute(sql, [id]);
            return vaga;
        } catch (error) {
            console.log('Erro ao buscar vaga por id.', error);
            throw error;
        }
    }
};

module.exports = vagasModel;