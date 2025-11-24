const authModel = require('../models/auth-model.js');

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

/**
 * Middleware para verificar se a empresa logada pode visualizar o perfil de um candidato.
 * Acesso é permitido apenas se o candidato se inscreveu em uma vaga da empresa.
 */
async function canViewCandidateProfile(req, res, next) {
    const idEmpresa = req.session.user.id;
    const idCandidato = req.params.id;

    const canView = await authModel.podeVerCandidato(idEmpresa, idCandidato);
    if (canView) {
        return next();
    }
    res.redirect('/home'); // Ou para uma página de "acesso negado"
}

/**
 * Middleware para verificar se a empresa logada é a dona da vaga que está tentando acessar.
 */
async function canViewVacancyApplications(req, res, next) {
    const idEmpresa = req.session.user.id;
    const idVaga = req.params.id;

    const isOwner = await authModel.vagaPertenceAEmpresa(idVaga, idEmpresa);
    if (isOwner) {
        return next();
    }
    res.redirect('/home'); // Ou para uma página de "acesso negado"
}

module.exports = { isCandidato, isEmpresa, canViewCandidateProfile, canViewVacancyApplications };