const express = require('express');
const router = express.Router();
const path = require('path');

const candidatosRoutes = require('./candidatos-routes');
const empresasRoutes = require('./empresas-routes');
const vagasRoutes = require('./vagas-routes');
const habilidadesRoutes = require('./habilidades-routes');

router.use(candidatosRoutes);
router.use(empresasRoutes);
router.use(vagasRoutes);
router.use(habilidadesRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); // Root path is now the main index page
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'cadastro.html'));
});

router.get('/sobre-nos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'sobre-nos.html'));
});

module.exports = router;