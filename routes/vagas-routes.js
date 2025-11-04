const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/buscar-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'buscar-vagas.html'));
});

router.get('/minhas-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'minhas-vagas.html'));
});

module.exports = router;