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

app.use('/usuarios', usuarioRoutes);

app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});