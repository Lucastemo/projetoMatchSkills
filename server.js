require("dotenv").config();
const db = require("./config/db.js");
const express = require("express");
const session = require('express-session');
const SECRET = process.env.SESSION_SECRET;
const usuarioController = require("./controllers/usuarios-controller.js");

const app = express();
const PORT = process.env.PORT;

const sessaoUsuario = session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true,

  cookie: { secure: true, maxAge: 7200 },
});

app.use(express.json());
app.use(sessaoUsuario);

app.listen(PORT, () => {
  console.log("Servidor OK.");
});

//Rotas para teste
app.post("/criar-usuario", usuarioController.criar_usuario);
app.post("/criar-empresa", usuarioController.criar_empresa);
app.post("/criar-candidato", usuarioController.criar_candidato);

//Teste login
app.post("/login", usuarioController.verificarLogin);
