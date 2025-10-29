const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarios-controller.js");
const verificarSessao = require("../middlewares/auth.js");

router.post("/criar-usuario", usuarioController.criar_usuario);
router.post("/criar-empresa", usuarioController.criar_empresa);
router.post("/criar-candidato", usuarioController.criar_candidato);

router.post("/login", usuarioController.verificarLogin);
router.get("/menu", verificarSessao, (req, res) => {
  res.sendFile("menuUser.html", { root: "public" });
});
router.post("/logout", usuarioController.logout);

module.exports = router;