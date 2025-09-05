USE sistema_vagas;

-- Criar usuário
DELIMITER //
CREATE PROCEDURE criar_usuario(
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_senha VARCHAR(255),
    IN p_tipo_usuario VARCHAR(10)
)
BEGIN
    INSERT INTO usuarios (nome, email, senha, tipo_usuario, data_criacao)
    VALUES (p_nome, p_email, p_senha, p_tipo_usuario, NOW());
END //
DELIMITER ;

-- Criar empresa
DELIMITER //
CREATE PROCEDURE criar_empresa(
    IN p_id_usuario INT,
    IN p_cnpj VARCHAR(18),
    IN p_razao_social VARCHAR(150),
    IN p_site VARCHAR(200)
)
BEGIN
    INSERT INTO empresas (id_empresa, cnpj, razao_social, site)
    VALUES (p_id_usuario, p_cnpj, p_razao_social, p_site);
END //
DELIMITER ;

-- Criar candidato
DELIMITER //
CREATE PROCEDURE criar_candidato(
    IN p_id_usuario INT,
    IN p_cpf VARCHAR(14),
    IN p_curriculo_link VARCHAR(255),
    IN p_descricao_pessoal TEXT
)
BEGIN
    INSERT INTO candidatos (id_candidato, cpf, curriculo_link, descricao_pessoal)
    VALUES (p_id_usuario, p_cpf, p_curriculo_link, p_descricao_pessoal);
END //
DELIMITER ;
