const db  = require('../config/db.js');

const usuarioModel = {
    // Registra um novo candidato usando uma transação
    registrar_candidato: async (nome, email, senha, cpf, descricao, curriculo_link) => {
        try {
            const sql = 'CALL registrar_candidato(?, ?, ?, ?, ?, ?)';
            const [rows] = await db.execute(sql, [nome, email, senha, cpf, descricao, curriculo_link]);
            return rows[0]?.[0]; // Retorna { id_usuario: X }
        } catch (error) {
            console.error('Erro no modelo ao registrar candidato:', error);
            throw error;
        }
    },

    // Registra uma nova empresa usando uma transação
    registrar_empresa: async (razao_social, email, senha, cnpj, descricao, site, setor, local, tamanho) => {
        try {
            const sql = 'CALL registrar_empresa(?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const [rows] = await db.execute(sql, [razao_social, email, senha, cnpj, descricao, site, setor, local, tamanho]);
            return rows[0]?.[0]; // Retorna { id_usuario: X }
        } catch (error) {
            console.error('Erro no modelo ao registrar empresa:', error);
            throw error;
        }
    },

    // Busca um usuário pelo email para o processo de login
    buscar_usuario_por_email: async (email) => {
        try {
            const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
            return rows[0] || null; // Retorna o usuário ou null
        } catch (error) {
            console.error('Erro ao verificar email:', error);
            throw error;
        }
    },
    
   buscar_foto_por_usuario: async (id_usuario) => {
       try {
           const sql = 'CALL buscar_foto_por_usuario(?)';
           const [rows] = await db.execute(sql, [id_usuario]);
           if (rows[0] && rows[0].length > 0) {
               return rows[0][0].foto;
           }
           return null;
       } catch (error) {
           console.log('Erro ao buscar a foto do usuário.', error);
           throw error;
       }
   },
   
       atualizar_foto_usuario: async (id_usuario, foto_url) => {
           try {
               const sql = 'CALL atualizar_foto_usuario(?, ?)';
               await db.execute(sql, [id_usuario, foto_url]);
               return true;
           } catch (error) {
               console.log('Erro ao atualizar a foto do usuário.', error);
               throw error;
           }
       },

    verificar_usuario_premium_por_id: async (id_usuario) => {
        try {
            const sql = 'CALL verificar_usuario_premium_por_id(?)';
            const [result] = await db.execute(sql, [id_usuario]);
            return result;
        } catch (error) {
            console.log('Erro ao verificar status premium do usuário.', error);
            throw error;
        }
    },

    tornar_usuario_premium_por_id: async (id_usuario) => {
        try {
            const sql = 'CALL tornar_usuario_premium_por_id(?)';
            const [result] = await db.execute(sql, [id_usuario]);
            return result.affectedRows > 0;
        } catch (error) {
            console.log('Erro ao tornar o usuário premium.', error);
            throw error;
        }
    },

    remover_premium_usuario_por_id: async (id_usuario) => {
        try {
            const sql = 'CALL remover_premium_usuario_por_id(?)';
            const [result] = await db.execute(sql, [id_usuario]);
            return result.affectedRows > 0;
        } catch (error) {
            console.log('Erro ao remover premium do usuário.', error);
            throw error;
        }
    }

   }
   
   module.exports = usuarioModel;