const express = require('express');
const router = express.Router();
const habilidadesController = require('../controllers/habilidades-controller');

router.get('/api/habilidades/vaga/:id_vaga', habilidadesController.buscar_habilidades_por_vaga);

module.exports = router;
