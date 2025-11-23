const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarios-controller");
const verificarSessao = require("../middlewares/auth.js");

router.post("/registrar", usuarioController.registrar_usuario);
router.get("/api/usuarios/:id/premium", usuarioController.verificar_usuario_premium_por_id);

router.post("/login", usuarioController.verificarLogin);
router.get("/menu", verificarSessao, (req, res) => {
  res.redirect("/home"); // Redireciona para a nova rota unificada
});

// Rota para obter dados da sessão do usuário logado
router.get('/session', verificarSessao, (req, res) => {
    res.status(200).json({ user: req.session.user });
});
router.post("/logout", usuarioController.logout);

router.patch("/atualizar-foto", usuarioController.upload.single('foto'), usuarioController.atualizar_foto_usuario);

router.patch("/api/usuarios/:id/tornar-premium", usuarioController.tornar_usuario_premium_por_id);
router.patch("/api/usuarios/:id/remover-premium", usuarioController.remover_premium_usuario_por_id);

module.exports = router;