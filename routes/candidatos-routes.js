const express = require('express');
const router = express.Router();
const path = require('path');
const candidatosController = require('../controllers/candidatos-controller');

// API

router.post('/api/candidatos/atualizar-candidato', candidatosController.atualizar_candidato);
router.post('/api/candidatos/atualizar-curriculo', candidatosController.atualizar_curriculo_candidato);

// Front-end

router.get('/perfil-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'perfil-candidato.html'));
});

router.get('/ver-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ver-candidato.html'));
});

module.exports = router;