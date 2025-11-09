const db = require('../config/db.js');

const vagasModel = {
    criar_vaga: async (id_empresa, titulo, descricao, localizacao, modalidade, salario) => {
        try {
            const sql = 'CALL criar_vaga(?, ?, ?, ?, ?, ?)';
            const [vaga] = await db.execute(sql, [id_empresa, titulo, descricao, localizacao, modalidade, salario]);
            return vaga;
        } catch (error) {
            console.log('Erro ao criar vaga.', error);
            throw error;
        }
    },
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
    },
    buscar_vagas_aleatorias: async () => {
        try {
            const sql = 'CALL buscar_vagas_aleatorias()';
            const [vagas] = await db.execute(sql);
            return vagas;
        } catch (error) {
            console.log('Erro ao buscar vagas aleatórias.', error);
            throw error;
        }
    },
    buscar_vagas_por_habilidades: async (habilidades) => {
        try {
            const sql = 'CALL buscar_vagas_por_habilidades(?)';
            const [vagas] = await db.execute(sql, [habilidades]);
            return vagas;
        } catch (error) {
            console.log('Erro ao buscar vagas por habilidades.', error);
            throw error;
        }
    }
};

module.exports = vagasModel;