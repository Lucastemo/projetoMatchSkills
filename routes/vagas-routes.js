const express = require('express');
const router = express.Router();
const path = require('path');
const vagasController = require('../controllers/vagas-controller.js');

// API
router.get('/api/vagas/empresa/:id', vagasController.buscar_vagas_por_empresa);

// Front-end

router.get('/buscar-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'buscar-vagas.html'));
});

router.get('/minhas-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'minhas-vagas.html'));
});

module.exports = router;