const db  = require('../config/db.js');

const usuarioModel = {
    criar_usuario: async (nome, email, senha, tipo_usuario) => {
        try {
            const sql = 'CALL criar_usuario (?, ?, ?, ?)';
            await db.execute(sql, [nome, email, senha, tipo_usuario]);
            return true;

        } catch (error) {
            console.log('Erro ao criar o usuário.', error);
            throw error;
        }
    },

    criar_empresa: async (id_usuario, cnpj, razao_social, site) => {
        try {
            const sql = 'CALL criar_empresa (?, ?, ?, ?)';
            await db.execute(sql, [id_usuario, cnpj, razao_social, site]);
            return true;

        } catch (error) {
            console.log('Erro ao criar empresa.', error);
            throw error;
        }
    },

    criar_candidato: async (id_usuario, cpf, curriculo_link, descricao_pessoal) => {
        try {
            const sql = 'CALL criar_candidato (?, ?, ?, ?)';
            await db.execute(sql, [id_usuario, cpf, curriculo_link, descricao_pessoal]);
            return true;

        } catch (error) {
            console.log('Erro ao criar candidato.', error);
            throw error;
        }
    }
}

module.exports = usuarioModel;