function verificarSessao(req, res, next) {
  if (!req.session.user) {
    return res.status(401).redirect("/");
  }
  next();
}

module.exports = verificarSessao;