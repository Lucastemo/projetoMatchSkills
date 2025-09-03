-- =============================
-- BANCO DE DADOS - SISTEMA DE VAGAS
-- =============================

CREATE DATABASE IF NOT EXISTS sistema_vagas;
USE sistema_vagas;

-- =============================
-- TABELA: usuarios
-- =============================
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único',
    nome VARCHAR(100) NOT NULL COMMENT 'Nome do usuário',
    email VARCHAR(100) UNIQUE NOT NULL COMMENT 'Login',
    senha VARCHAR(255) NOT NULL COMMENT 'Senha',
    tipo_usuario ENUM('empresa', 'candidato') NOT NULL COMMENT 'Tipo',
    data_criacao DATETIME NOT NULL COMMENT 'Registro'
);

-- =============================
-- TABELA: empresas
-- =============================
CREATE TABLE empresas (
    id_empresa INT PRIMARY KEY COMMENT 'Relaciona com usuários',
    cnpj VARCHAR(18) UNIQUE NOT NULL COMMENT 'Cadastro Nacional PJ',
    razao_social VARCHAR(150) UNIQUE NOT NULL COMMENT 'Nome legal',
    site VARCHAR(200) NULL COMMENT 'Opcional',
    FOREIGN KEY (id_empresa) REFERENCES usuarios(id_usuario)
);

-- =============================
-- TABELA: candidatos
-- =============================
CREATE TABLE candidatos (
    id_candidato INT PRIMARY KEY COMMENT 'Relaciona com usuários',
    cpf VARCHAR(14) UNIQUE NOT NULL COMMENT 'Cadastro PF',
    curriculo_link VARCHAR(255) NOT NULL COMMENT 'PDF ou link',
    descricao_pessoal TEXT COMMENT 'Resumo profissional',
    FOREIGN KEY (id_candidato) REFERENCES usuarios(id_usuario)
);

-- =============================
-- TABELA: vagas
-- =============================
CREATE TABLE vagas (
    id_vaga INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único',
    id_empresa INT NOT NULL COMMENT 'Quem criou',
    titulo VARCHAR(150) NOT NULL COMMENT 'Nome da vaga',
    descricao TEXT COMMENT 'Detalhes',
    localizacao VARCHAR(150) NOT NULL COMMENT 'Cidade/Remoto',
    data_publicacao DATETIME NOT NULL COMMENT 'Registro',
    FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa)
);

-- =============================
-- TABELA: habilidades
-- =============================
CREATE TABLE habilidades (
    id_habilidade INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador',
    nome VARCHAR(100) NOT NULL COMMENT 'Nome da skill',
    categoria VARCHAR(100) NOT NULL COMMENT 'Ex.: Programação, Comunicação'
);

-- =============================
-- TABELA: habilidades_candidatos
-- =============================
CREATE TABLE habilidades_candidatos (
    id_candidato INT NOT NULL COMMENT 'Candidato',
    id_habilidade INT NOT NULL COMMENT 'Skill',
    nivel ENUM('Básico', 'Intermediário', 'Avançado') NOT NULL COMMENT 'Proficiência',
    PRIMARY KEY (id_candidato, id_habilidade) COMMENT 'Evita duplicatas',
    FOREIGN KEY (id_candidato) REFERENCES candidatos(id_candidato),
    FOREIGN KEY (id_habilidade) REFERENCES habilidades(id_habilidade)
);

-- =============================
-- TABELA: habilidades_vagas
-- =============================
CREATE TABLE habilidades_vagas (
    id_vaga INT NOT NULL COMMENT 'Vaga',
    id_habilidade INT NOT NULL COMMENT 'Skill',
    obrigatoria BOOLEAN NOT NULL COMMENT 'Se é requisito ou desejável',
    PRIMARY KEY (id_vaga, id_habilidade) COMMENT 'Evita duplicatas',
    FOREIGN KEY (id_vaga) REFERENCES vagas(id_vaga),
    FOREIGN KEY (id_habilidade) REFERENCES habilidades(id_habilidade)
);

-- =============================
-- TABELA: candidaturas
-- =============================
CREATE TABLE candidaturas (
    id_candidatura INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador',
    id_vaga INT NOT NULL COMMENT 'Vaga aplicada',
    id_candidato INT NOT NULL COMMENT 'Quem aplicou',
    data_candidatura DATETIME NOT NULL COMMENT 'Registro',
    status ENUM('Enviado', 'Em Análise', 'Rejeitado', 'Aprovado') NOT NULL COMMENT 'Situação',
    FOREIGN KEY (id_vaga) REFERENCES vagas(id_vaga),
    FOREIGN KEY (id_candidato) REFERENCES candidatos(id_candidato)
);