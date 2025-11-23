const express = require('express');
const router = express.Router();
const path = require('path');
const verificarSessao = require('../middlewares/auth.js');

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

// Rota unificada para a página inicial do usuário logado
router.get('/home', verificarSessao, (req, res) => {
    if (req.session.user.tipo === 'candidato') {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    } else { // 'empresa'
        res.sendFile(path.join(__dirname, '..', 'public', 'empresa-home.html'));
    }
});

// Rota unificada para a página de perfil do usuário
router.get('/perfil', verificarSessao, (req, res) => {
    if (req.session.user.tipo === 'candidato') {
        res.sendFile(path.join(__dirname, '..', 'public', 'perfil-candidato.html'));
    } else { // 'empresa'
        res.sendFile(path.join(__dirname, '..', 'public', 'perfil-empresa.html'));
    }
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