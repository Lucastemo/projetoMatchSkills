const db  = require('../config/db.js');

const habilidadesModel = {
    criar_habilidade: async(nome, categoria)=> {

        try {
            const sql = 'CALL criar_habilidade (?, ?)';
            await db.execute(sql, [nome, categoria]);
            return true;

        } catch (error) {
            console.log('Erro ao criar a habilidade.', error);
            throw error;
        }
    },

    criar_habilidade_candidato: async(id_candidato, id_habilidade, nivel)=> {

        try {
            const sql = 'CALL criar_habilidade_candidato (?, ?, ?)';
            await db.execute(sql, [id_candidato, id_habilidade, nivel]);
            return true;

        } catch (error) {
            console.log('Erro ao criar a habilidade do candidato.', error);
            throw error;
        }
    },

    criar_habilidade_vaga: async(id_vaga, id_habilidade, obrigatoria)=> {

        try {
            const sql = 'CALL criar_habilidade_vaga (?, ?, ?)';
            await db.execute(sql, [id_vaga, id_habilidade, obrigatoria]);
            return true;

        } catch (error) {
            console.log('Erro ao criar a habilidade da vaga.', error);
            throw error;
        }
    }
}

module.exports = habilidadesModel;