const db = require('../config/db');

class Candidato {
    static async buscar_por_id(id) {
        try {
            const [results] = await db.query('CALL buscar_candidato_por_id(?)', [id]);
            return results[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async buscar_id_habilidades_por_candidato(id) {
        try {
            const [results] = await db.query('CALL buscar_id_habilidades_por_candidato(?)', [id]);
            return results[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async atualizar_candidato(id, nome, email, cpf, descricao_pessoal) {
        try {
            const [results] = await db.query('CALL atualizar_candidato(?, ?, ?, ?, ?)', [id, nome, email, cpf, descricao_pessoal]);
            return results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async atualizar_curriculo_candidato(id, curriculo_link) {
        try {
            const [results] = await db.query('CALL atualizar_curriculo_candidato(?, ?)', [id, curriculo_link]);
            return results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async atualizar_habilidades_candidato(id, habilidades) {
        try {
            // The procedure expects a comma-separated string of IDs.
            const habilidadesString = habilidades.join(',');
            const [results] = await db.query('CALL atualizar_habilidades_candidato(?, ?)', [id, habilidadesString]);
            return results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = Candidato;