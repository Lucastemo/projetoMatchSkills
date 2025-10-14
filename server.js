require('dotenv').config();
const db = require('./config/db.js');
const express = require('express');
const usuarioController = require('./controllers/usuarios-controller.js');

const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor OK.');
});

//Rotas para teste
app.post('/criar-usuario', usuarioController.criar_usuario);
app.post('/criar-empresa', usuarioController.criar_empresa);
app.post('/criar-candidato', usuarioController.criar_candidato);