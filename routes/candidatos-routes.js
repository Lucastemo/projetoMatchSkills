const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/perfil-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'perfil-candidato.html'));
});

router.get('/ver-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ver-candidato.html'));
});

module.exports = router;