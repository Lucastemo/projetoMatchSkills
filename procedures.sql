USE sistema_vagas;

-- Criar usuário
DELIMITER //
CREATE PROCEDURE criar_usuario(
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_senha VARCHAR(255),
    IN p_tipo_usuario VARCHAR(10),
    IN p_descricao TEXT
)
BEGIN
    INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao)
    VALUES (p_nome, p_email, p_senha, p_tipo_usuario, p_descricao, NOW());
END //
DELIMITER ;

-- Criar empresa
DELIMITER //
CREATE PROCEDURE criar_empresa(
    IN p_id_usuario INT,
    IN p_cnpj VARCHAR(18),
    IN p_razao_social VARCHAR(150),
    IN p_site VARCHAR(200),
    IN p_setor VARCHAR(100),
    IN p_local VARCHAR(100),
    IN p_tamanho ENUM('Pequena', 'Média', 'Grande')
)
BEGIN
    INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho)
    VALUES (p_id_usuario, p_cnpj, p_razao_social, p_site, p_setor, p_local, p_tamanho);
END //
DELIMITER ;

-- Criar candidato
DELIMITER //
CREATE PROCEDURE criar_candidato(
    IN p_id_usuario INT,
    IN p_cpf VARCHAR(14),
    IN p_curriculo_link VARCHAR(255)
)
BEGIN
    INSERT INTO candidatos (id_candidato, cpf, curriculo_link)
    VALUES (p_id_usuario, p_cpf, p_curriculo_link);
END //
DELIMITER ;

-- Criar habilidade
DELIMITER //
CREATE PROCEDURE criar_habilidade(
    IN p_nome VARCHAR(100),
    IN p_categoria VARCHAR(100)
)
BEGIN
    INSERT INTO habilidades (nome, categoria)
    VALUES (p_nome, p_categoria);
END //
DELIMITER ;

-- Criar habilidade de candidato
DELIMITER //
CREATE PROCEDURE criar_habilidade_candidato(
    IN p_id_candidato INT,
    IN p_id_habilidade INT,
    IN p_nivel ENUM('Básico', 'Intermediário', 'Avançado')
)
BEGIN
    INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
    VALUES (p_id_candidato, p_id_habilidade, p_nivel);
END //
DELIMITER ;

-- Criar habilidade de vaga
DELIMITER //
CREATE PROCEDURE criar_habilidade_vaga(
    IN p_id_vaga INT,
    IN p_id_habilidade INT,
    IN p_obrigatoria BOOLEAN
)
BEGIN
    INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
    VALUES (p_id_vaga, p_id_habilidade, p_obrigatoria);
END //
DELIMITER ;

-- Criar vaga
DELIMITER //
CREATE PROCEDURE criar_vaga(
    IN p_id_empresa INT,
    IN p_titulo VARCHAR(150),
    IN p_descricao TEXT,
    IN p_localizacao VARCHAR(150)
)
BEGIN
    INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, data_publicacao)
    VALUES (p_id_empresa, p_titulo, p_descricao, p_localizacao, NOW());
END //
DELIMITER ;

-- Criar candidatura
DELIMITER //
CREATE PROCEDURE criar_candidatura(
    IN p_id_vaga INT,
    IN p_id_candidato INT,
    IN p_status ENUM('Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
)
BEGIN
    INSERT INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
    VALUES (p_id_vaga, p_id_candidato, NOW(), p_status);
END //
DELIMITER ;

-- Buscar empresas por nome
DELIMITER //
CREATE PROCEDURE buscar_empresas_por_nome(
    IN p_nome VARCHAR(100)
)
BEGIN
    SELECT e.*, u.foto FROM empresas e JOIN usuarios u ON e.id_empresa = u.id_usuario WHERE razao_social LIKE CONCAT('%', p_nome, '%');
END //
DELIMITER ;

-- Buscar empresa por id
DELIMITER //
CREATE PROCEDURE buscar_empresa_por_id(
    IN p_id INT
)
BEGIN
    SELECT e.*, u.foto, u.descricao FROM empresas e JOIN usuarios u ON e.id_empresa = u.id_usuario WHERE id_empresa = p_id;
END //
DELIMITER ;

-- Atualizar foto do usuário
DELIMITER //
CREATE PROCEDURE atualizar_foto_usuario(
    IN p_id_usuario INT,
    IN p_foto_url VARCHAR(255)
)
BEGIN
    UPDATE usuarios SET foto = p_foto_url WHERE id_usuario = p_id_usuario;
END //
DELIMITER ;

-- Atualizar empresa
DELIMITER //
CREATE PROCEDURE atualizar_empresa(
    IN p_id_empresa INT,
    IN p_razao_social VARCHAR(150),
    IN p_site VARCHAR(200),
    IN p_setor VARCHAR(100),
    IN p_local VARCHAR(100),
    IN p_tamanho ENUM('Pequena', 'Média', 'Grande'),
    IN p_descricao TEXT
)
BEGIN
    UPDATE empresas SET razao_social = p_razao_social, site = p_site, setor = p_setor, local = p_local, tamanho = p_tamanho WHERE id_empresa = p_id_empresa;
    UPDATE usuarios SET descricao = p_descricao WHERE id_usuario = p_id_empresa;
END //
DELIMITER ;

-- Atualizar candidato
DELIMITER //
CREATE PROCEDURE atualizar_candidato(
    IN p_id_candidato INT,
    IN p_curriculo_link VARCHAR(255),
    IN p_descricao TEXT
)
BEGIN
    UPDATE candidatos SET curriculo_link = p_curriculo_link WHERE id_candidato = p_id_candidato;
    UPDATE usuarios SET descricao = p_descricao WHERE id_usuario = p_id_candidato;
END //
DELIMITER ;

-- Buscar empresas aleatórias
DELIMITER //
CREATE PROCEDURE buscar_empresas_aleatorias()
BEGIN
    SELECT e.*, u.foto 
    FROM empresas e
    JOIN usuarios u ON e.id_empresa = u.id_usuario
    ORDER BY RAND()
    LIMIT 10;
END //
DELIMITER ;

-- Buscar vagas por empresa
DELIMITER //
CREATE PROCEDURE buscar_vagas_por_empresa(IN p_id_empresa INT)
BEGIN
    SELECT * FROM vagas WHERE id_empresa = p_id_empresa;
END //
DELIMITER ;