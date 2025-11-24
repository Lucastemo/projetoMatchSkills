require('dotenv').config();
require('./config/db.js');
const express = require('express');
const path = require('path');
const session = require('express-session');
const {sessionConfig} = require('./config/session.js');

const usuarioRoutes = require('./routes/usuarios-routes.js');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use('/curriculos-candidatos', express.static(path.join(__dirname, 'public', 'curriculos-candidatos')));
app.use(session(sessionConfig));

// Middleware global para verificar autenticação
app.use((req, res, next) => {
    const publicPaths = ['/login', '/cadastro', '/usuarios/login', '/usuarios/registrar'];
    const isPublicPath = publicPaths.includes(req.path);

    // Se o usuário não estiver logado e a rota não for pública, redireciona para /login
    if (!req.session.user && !isPublicPath) {
        return res.redirect('/login');
    }

    // Se o usuário estiver logado e tentar acessar /login ou /cadastro, redireciona para /home
    if (req.session.user && (req.path === '/login' || req.path === '/cadastro')) {
        return res.redirect('/home');
    }

    next();
});

app.use('/', routes);

app.use('/usuarios', usuarioRoutes);

app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});