require('dotenv').config();
require('./config/db.js');
const express = require('express');
const path = require('path');
const session = require('express-session');
const {sessionConfig} = require('./config/session.js');

const usuarioRoutes = require('./routes/usuarios-routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use(session(sessionConfig));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/buscar-empresas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'buscar-empresas.html'));
});

app.get('/buscar-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'buscar-vagas.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/candidaturas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'candidaturas.html'));
});

app.get('/empresa-home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'empresa-home.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/minhas-vagas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'minhas-vagas.html'));
});

app.get('/perfil-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'perfil-candidato.html'));
});

app.get('/perfil-empresa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'perfil-empresa.html'));
});

app.get('/sobre-nos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre-nos.html'));
});

app.get('/ver-candidato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ver-candidato.html'));
});

app.get('/ver-empresa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ver-empresa.html'));
});

app.use('/usuarios', usuarioRoutes);

app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});