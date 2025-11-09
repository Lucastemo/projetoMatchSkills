const Candidato = require('../models/candidatos-model');

class CandidatosController {
    static async getHabilidadesStringByCandidatoId(id) {
        const habilidades = await Candidato.buscar_id_habilidades_por_candidato(id);
        if (habilidades.length > 0) {
            let conjuntoHabilidades = "";
            habilidades.forEach(habilidade => {
                conjuntoHabilidades += `${habilidade.id_habilidade},`;
            });
            return conjuntoHabilidades.slice(0, -1);
        }
        return null;
    }

    static async atualizar_candidato(req, res) {
        const { id_candidato, nome, email, cpf, descricao_pessoal } = req.body;
        if (!id_candidato || !nome || !email || !cpf || !descricao_pessoal) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios: id, nome, email, cpf e descrição.' });
        }

        try {
            await Candidato.atualizar_candidato(id_candidato, nome, email, cpf, descricao_pessoal);
            res.status(200).json({ message: 'Perfil do candidato atualizado com sucesso.' });
        } catch (error) {
            console.error('Erro ao atualizar perfil do candidato:', error);
            res.status(500).json({ error: 'Erro interno no servidor ao atualizar o perfil do candidato.' });
        }
    }

    static async atualizar_curriculo_candidato(req, res) {
        const { id_candidato, curriculo_link } = req.body;
        if (!id_candidato || !curriculo_link) {
            return res.status(400).json({ error: 'ID do candidato e link do currículo são obrigatórios.' });
        }

        try {
            await Candidato.atualizar_curriculo_candidato(id_candidato, curriculo_link);
            res.status(200).json({ message: 'Currículo do candidato atualizado com sucesso.' });
        } catch (error) {
            console.error('Erro ao atualizar currículo do candidato:', error);
            res.status(500).json({ error: 'Erro interno no servidor ao atualizar o currículo do candidato.' });
        }
    }
}

module.exports = CandidatosController;