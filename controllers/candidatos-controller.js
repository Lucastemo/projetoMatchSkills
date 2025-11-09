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
}

module.exports = CandidatosController;