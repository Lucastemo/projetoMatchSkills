const express = require('express');
const router = express.Router();
const habilidadesController = require('../controllers/habilidades-controller');

router.get('/api/habilidades', habilidadesController.listar_habilidade);
router.get('/api/habilidades/vaga/:id_vaga', habilidadesController.buscar_habilidades_por_vaga);
router.get('/api/habilidades/candidato/:id', habilidadesController.buscar_habilidades_por_candidato);

module.exports = router;
