const db = require('../config/db');

class Candidato {
    static async buscar_id_habilidades_por_candidato(id) {
        try {
            const [results] = await db.query('CALL buscar_id_habilidades_por_candidato(?)', [id]);
            return results[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = Candidato;