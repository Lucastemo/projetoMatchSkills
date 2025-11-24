function isCandidato(req, res, next) {
    // Assumes user is already authenticated by a previous middleware
    if (req.session.user && req.session.user.tipo === 'candidato') {
        return next();
    }
    // If not a candidate, redirect to their home or a generic access-denied page
    res.redirect('/home');
}

function isEmpresa(req, res, next) {
    // Assumes user is already authenticated by a previous middleware
    if (req.session.user && req.session.user.tipo === 'empresa') {
        return next();
    }
    // If not a company, redirect to their home or a generic access-denied page
    res.redirect('/home');
}

module.exports = { isCandidato, isEmpresa };