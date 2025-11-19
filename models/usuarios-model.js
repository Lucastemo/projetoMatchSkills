const db  = require('../config/db.js');

const usuarioModel = {
    // Cria um novo usuário no sistema
    criar_usuario: async (nome, email, senha, tipo_usuario, descricao) => {
        try {
            const sql = 'CALL criar_usuario (?, ?, ?, ?, ?)';
            const [rows] = await db.execute(sql, [nome, email, senha, tipo_usuario, descricao]);
            const id_usuario = rows[0]?.[0];
            return id_usuario;

        } catch (error) {
            console.log('Erro ao criar o usuário.', error);
            throw error;
        }
    },

    // Cria uma nova empresa vinculada a um usuário existente
    criar_empresa: async (id_empresa, cnpj, razao_social, site, setor, local, tamanho) => {

        const [rowsUser] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_empresa]);
        
        try {
            // Verifica se o usuário com o ID informado existe no banco
            if (rowsUser.length === 0) {
                console.log('Usuário não encontrado ou cadastrado.');
                return false;
            }

            const sql = 'CALL criar_empresa (?, ?, ?, ?, ?, ?, ?)';
            await db.execute(sql, [id_empresa, cnpj, razao_social, site, setor, local, tamanho]);
            return true;

        } catch (error) {
            console.log('Erro ao criar empresa.', error);
            throw error;
        }
    },

    // Cria um novo candidato vinculado a um usuário existente
    criar_candidato: async (id_usuario, cpf, curriculo_link) => {
        try {
            const sql = 'CALL criar_candidato (?, ?, ?)';
            await db.execute(sql, [id_usuario, cpf, curriculo_link]);
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
    }

   }
   
   module.exports = usuarioModel;