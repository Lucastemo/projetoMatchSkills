const db = require('../config/db.js');

const authModel = {
    /**
     * Verifica se uma empresa tem permissão para visualizar o perfil de um candidato.
     * A permissão é concedida se o candidato se inscreveu em qualquer vaga da empresa.
     */
    podeVerCandidato: async (idEmpresa, idCandidato) => {
        try {
            const [rows] = await db.execute('CALL verificar_acesso_candidato(?, ?)', [idEmpresa, idCandidato]);
            return rows[0] && rows[0].length > 0; // Retorna true se encontrar uma correspondência, false caso contrário
        } catch (error) {
            console.error('Erro no modelo ao verificar acesso ao candidato:', error);
            throw error;
        }
    },

    /**
     * Verifica se uma vaga pertence a uma determinada empresa.
     */
    vagaPertenceAEmpresa: async (idVaga, idEmpresa) => {
        const [rows] = await db.query('SELECT id_empresa FROM vagas WHERE id_vaga = ?', [idVaga]);
        return rows.length > 0 && rows[0].id_empresa === idEmpresa;
    }
};

module.exports = authModel;