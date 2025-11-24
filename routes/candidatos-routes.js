const express = require('express');
const router = express.Router();
const path = require('path');
const { isCandidato, isEmpresa, canViewCandidateProfile } = require('../middlewares/roleAuth.js');
const candidatosController = require('../controllers/candidatos-controller');

// API

router.get('/api/candidatos/:id', candidatosController.buscar_candidato_por_id);
router.get('/api/candidatos/:id/informacoes', candidatosController.buscar_informacoes_do_candidato);
router.put('/api/candidatos/atualizar-candidato', candidatosController.atualizar_candidato);
router.put('/api/candidatos/atualizar-habilidades', candidatosController.atualizar_habilidades_candidato);
router.patch('/api/candidatos/atualizar-curriculo', candidatosController.uploadCurriculo, candidatosController.atualizar_curriculo_candidato);
router.post('/api/candidatos/candidatura', candidatosController.criar_candidatura);

// Front-end

router.get('/ver-candidato/:id', isEmpresa, canViewCandidateProfile, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ver-candidato.html'));
});

module.exports = router;