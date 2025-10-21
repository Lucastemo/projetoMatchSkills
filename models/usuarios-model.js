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

        const [rowsUser] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);
        
        try {
            // Verifica se o usuário portador do ID está registrado no banco de dados
            if(rowsUser.length && rowsUser.affectedRows == 0){
                return rowsUser [0] && 
                console.log('Usuário não encontrado ou cadastrado.');
            }
            // console.log(rowsUser);

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
    },

    //Função para verificar o email do usuario
   verificarEmail: async (email) => {
    try {
        const [usuario] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return usuario || [];
    } catch (error) {
        console.error('Erro ao verificar email:', error);
        throw error;
    }
}

}

module.exports = usuarioModel;