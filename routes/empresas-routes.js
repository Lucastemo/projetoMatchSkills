const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/buscar-empresas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'buscar-empresas.html'));
});

router.get('/empresa-home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'empresa-home.html'));
});

router.get('/perfil-empresa', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'perfil-empresa.html'));
});

router.get('/ver-empresa', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ver-empresa.html'));
});

router.get('/candidaturas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'candidaturas.html'));
});

module.exports = router;