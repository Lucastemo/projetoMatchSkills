USE sistema_vagas;

-- ==========================================
-- 1. INSERINDO EMPRESAS COM SITES FICTÍCIOS
-- ==========================================
-- Tech Solutions SA
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Tech Solutions SA', 'contact@techsolutions.com', 'senha123', 'empresa', 'Líder em soluções de software corporativo.', NOW(), TRUE, NULL);
SET @id_emp1 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp1, '01.234.567/0001-01', 'Tech Solutions SA', 'https://www.techsolutions.com', 'Tecnologia', 'São Paulo, SP', 'Grande');

-- Varejo Brazuca Ltda
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Varejo Brazuca Ltda', 'rh@varejobrazuca.com.br', 'senha123', 'empresa', 'Rede de varejo em expansão nacional.', NOW(), FALSE, NULL);
SET @id_emp2 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp2, '02.345.678/0001-02', 'Varejo Brazuca Ltda', 'https://www.varejobrazuca.com.br', 'Varejo', 'Rio de Janeiro, RJ', 'Média');

-- Data Analytics Corp
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Data Analytics Corp', 'jobs@dataanalytics.io', 'senha123', 'empresa', 'Consultoria especializada em Big Data.', NOW(), TRUE, NULL);
SET @id_emp3 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp3, '03.456.789/0001-03', 'Data Analytics Corp', 'https://www.dataanalytics.io', 'Consultoria', 'Remoto', 'Pequena');

-- Green House NGO
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Green House NGO', 'contact@greenhouse.org', 'senha123', 'empresa', 'ONG focada em sustentabilidade.', NOW(), FALSE, NULL);
SET @id_emp4 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp4, '04.567.890/0001-04', 'Green House NGO', 'https://www.greenhouse.org', 'Terceiro Setor', 'Curitiba, PR', 'Pequena');

-- Fintech Revolution
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Fintech Revolution', 'hello@fintechrev.com', 'senha123', 'empresa', 'Revolucionando o mercado financeiro.', NOW(), TRUE, NULL);
SET @id_emp5 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp5, '05.678.901/0001-05', 'Fintech Revolution', 'https://www.fintechrev.com', 'Finanças', 'São Paulo, SP', 'Média');

-- Constructora Solida
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Constructora Solida', 'adm@solida.com.br', 'senha123', 'empresa', 'Construindo sonhos desde 1990.', NOW(), FALSE, NULL);
SET @id_emp6 = LAST_INSERT_ID();
INSERT INTO empresas (id_empresa, cnpj, razao_social, site, setor, local, tamanho) VALUES (@id_emp6, '06.789.012/0001-06', 'Constructora Solida', 'https://www.solida.com.br', 'Construção Civil', 'Belo Horizonte, MG', 'Grande');

-- ==========================================
-- 2. INSERINDO CANDIDATOS E SUAS HABILIDADES
-- ==========================================
-- João Java
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('João Java', 'joao.java@email.com', 'senha123', 'candidato', 'Desenvolvedor Backend especialista em Java.', NOW(), TRUE, NULL);
SET @id_cand1 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand1, '111.222.333-01', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand1, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Java', 'Spring Boot', 'SQL', 'Git', 'Docker', 'AWS', 'Scrum', 'Inglês (Intermediário)');

-- Maria Data
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Maria Data', 'maria.data@email.com', 'senha123', 'candidato', 'Cientista de Dados apaixonada por IA.', NOW(), FALSE, NULL);
SET @id_cand2 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand2, '111.222.333-02', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand2, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Python', 'SQL (Avançado)', 'Power BI', 'Estatística', 'Machine Learning', 'Excel (Avançado)', 'Inglês (Avançado)');

-- Pedro Sales
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Pedro Sales', 'pedro.sales@email.com', 'senha123', 'candidato', 'Especialista em vendas B2B e negociação.', NOW(), FALSE, NULL);
SET @id_cand3 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand3, '111.222.333-03', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand3, id_habilidade, 'Intermediário' FROM habilidades WHERE nome IN ('Negociação', 'CRM', 'Vendas B2B', 'Comunicação Assertiva', 'Prospecção', 'Marketing Digital');

-- Ana Agile
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Ana Agile', 'ana.agile@email.com', 'senha123', 'candidato', 'Agile Coach e Scrum Master.', NOW(), TRUE, NULL);
SET @id_cand4 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand4, '111.222.333-04', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand4, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Scrum', 'Kanban', 'Jira', 'Liderança', 'Facilitação', 'Design Thinking');

-- Lucas Frontend
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Lucas Frontend', 'lucas.front@email.com', 'senha123', 'candidato', 'Desenvolvedor Frontend focado em UX.', NOW(), FALSE, NULL);
SET @id_cand5 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand5, '111.222.333-05', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand5, id_habilidade, 'Intermediário' FROM habilidades WHERE nome IN ('JavaScript', 'React.js', 'CSS3', 'HTML5', 'Figma', 'UI Design');

-- Carla RH
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Carla RH', 'carla.rh@email.com', 'senha123', 'candidato', 'Psicóloga e Tech Recruiter.', NOW(), TRUE, NULL);
SET @id_cand6 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand6, '111.222.333-06', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand6, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Recrutamento e Seleção', 'Gestão de Pessoas', 'LinkedIn', 'Entrevistas', 'Legislação Trabalhista');

-- Marcos DevOps
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Marcos DevOps', 'marcos.ops@email.com', 'senha123', 'candidato', 'Engenheiro DevOps e Cloud.', NOW(), TRUE, NULL);
SET @id_cand7 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand7, '111.222.333-07', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand7, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Linux', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Python');

-- Julia Marketing
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Julia Marketing', 'julia.mkt@email.com', 'senha123', 'candidato', 'Especialista em Marketing Digital e SEO.', NOW(), FALSE, NULL);
SET @id_cand8 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand8, '111.222.333-08', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand8, id_habilidade, 'Intermediário' FROM habilidades WHERE nome IN ('SEO', 'Google Ads', 'Redação', 'Social Media', 'Branding', 'Photoshop');

-- Roberto Financeiro
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Roberto Financeiro', 'beto.fin@email.com', 'senha123', 'candidato', 'Analista Financeiro Sênior.', NOW(), FALSE, NULL);
SET @id_cand9 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand9, '111.222.333-09', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand9, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Excel (Avançado)', 'Contabilidade', 'Matemática Financeira', 'SAP', 'Inglês (Básico)');

-- Fernanda Design
INSERT INTO usuarios (nome, email, senha, tipo_usuario, descricao, data_criacao, premium, foto) VALUES ('Fernanda Design', 'fe.design@email.com', 'senha123', 'candidato', 'Product Designer.', NOW(), TRUE, NULL);
SET @id_cand10 = LAST_INSERT_ID();
INSERT INTO candidatos (id_candidato, cpf, curriculo_link) VALUES (@id_cand10, '111.222.333-10', NULL);
INSERT INTO habilidades_candidatos (id_candidato, id_habilidade, nivel)
SELECT @id_cand10, id_habilidade, 'Avançado' FROM habilidades WHERE nome IN ('Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UX Research', 'Prototipação');

-- ==========================================
-- 3. INSERINDO VAGAS (PARTE 1)
-- ==========================================
-- Vaga 1: Desenvolvedor Java Pleno para Tech Solutions SA
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp1, 'Desenvolvedor Java Pleno', 'Vaga para atuar com Java e Microserviços.', 'São Paulo, SP', 'Híbrido', 'R$ 8.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Java', 'Spring Boot', 'SQL');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Docker', 'AWS', 'Inglês (Intermediário)');

-- Vaga 2: Desenvolvedor Angular Sênior para Tech Solutions SA
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp1, 'Desenvolvedor Angular Sênior', 'Vaga para atuar com Angular e Frontend moderno.', 'Remoto', 'Remoto', 'R$ 12.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Angular', 'TypeScript', 'HTML5');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('UI Design', 'Figma');

-- Vaga 3: Tech Lead para Tech Solutions SA
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp1, 'Tech Lead', 'Liderança técnica de squad.', 'São Paulo, SP', 'Presencial', 'R$ 16.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Liderança', 'Arquitetura de Microsserviços', 'Java');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Scrum', 'Mentoria');

-- Vaga 4: Estagiário em QA para Tech Solutions SA
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp1, 'Estagiário em QA', 'Apoio em testes automatizados.', 'São Paulo, SP', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Lógica de Programação', 'Java');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Testes Unitários', 'Selenium');

-- Vaga 5: DevOps Engineer para Tech Solutions SA
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp1, 'DevOps Engineer', 'Automatização de infraestrutura.', 'Remoto', 'Remoto', 'R$ 11.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Docker', 'Kubernetes', 'AWS');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Terraform', 'Ansible');

-- Vaga 6: Vendedor Interno para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Vendedor Interno', 'Prospecção e vendas por telefone.', 'Rio de Janeiro, RJ', 'Presencial', 'R$ 2.500', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Vendas B2B', 'Comunicação Assertiva');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('CRM', 'Excel (Básico)');

-- Vaga 7: Gerente de Loja para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Gerente de Loja', 'Gestão de equipe e metas.', 'Rio de Janeiro, RJ', 'Presencial', 'R$ 5.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Liderança de Equipes', 'Gestão de Vendas');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Contratação', 'Treinamento');

-- Vaga 8: Analista de Estoque para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Analista de Estoque', 'Controle de entrada e saída.', 'Rio de Janeiro, RJ', 'Presencial', 'R$ 3.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Excel (Avançado)', 'Logística');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('SAP', 'Power BI');

-- Vaga 9: Assistente Administrativo para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Assistente Administrativo', 'Apoio ao setor financeiro.', 'Rio de Janeiro, RJ', 'Híbrido', 'R$ 2.200', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Organização Pessoal', 'Excel (Intermediário)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Inglês (Básico)');

-- Vaga 10: Cientista de Dados Júnior para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Cientista de Dados Júnior', 'Análise exploratória de dados.', 'Remoto', 'Remoto', 'R$ 6.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Python', 'SQL', 'Estatística');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Machine Learning', 'Git');

-- Vaga 11: Engenheiro de Dados Pleno para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Engenheiro de Dados Pleno', 'Criação de pipelines ETL.', 'Remoto', 'Remoto', 'R$ 9.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Python', 'SQL (Avançado)', 'ETL (Extract, Transform, Load)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Big Data (Hadoop, Spark)', 'AWS');

-- Vaga 12: Analista de BI Sênior para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Analista de BI Sênior', 'Dashboards executivos.', 'Remoto', 'Remoto', 'R$ 10.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Power BI', 'Storytelling com Dados');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Tableau', 'SQL');

-- Vaga 13: Coordenador de Projetos para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Coordenador de Projetos', 'Gestão de projetos sociais.', 'Curitiba, PR', 'Híbrido', 'R$ 5.500', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Gestão de Projetos (PMBOK)', 'Liderança');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Inglês (Avançado)', 'Captação de Recursos (Fundraising)');

-- Vaga 15: Gerente de Gestão de Contas para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Gerente de Gestão de Contas', 'Vaga para atuar com Gestão de Contas.', 'Rio de Janeiro, RJ', 'Híbrido', 'R$ 20.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Gestão de Contas', 'Métricas Ágeis (Lead Time, Cycle Time)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Curiosidade', 'Interpretação Simultânea', 'Cross-selling');

-- Vaga 16: Estagiário em Copywriting para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Estagiário em Copywriting', 'Vaga para atuar com Copywriting.', 'Rio de Janeiro, RJ', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Liderança', 'Google Data Studio', 'ETL (Extract, Transform, Load)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Copywriting', 'Métricas Ágeis (Lead Time, Cycle Time)', 'Swift');

-- Vaga 17: Estagiário em Liderança para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Estagiário em Liderança', 'Vaga para atuar com Liderança.', 'Rio de Janeiro, RJ', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Engenharia de Produto', 'QBR (Quarterly Business Review)', 'DevOps');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Consultoria de Gestão', 'Retenção de Talentos', 'Liderança (Desenvolvimento)', 'Liderança');

-- Vaga 18: Gerente de Fechamento de Vendas (Closer) para Varejo Brazuca Ltda
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp2, 'Gerente de Fechamento de Vendas (Closer)', 'Vaga para atuar com Fechamento de Vendas (Closer).', 'Rio de Janeiro, RJ', 'Híbrido', 'R$ 15.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Acompanhamento Terapêutico (AT)', 'Educação em Saúde', 'Testes A/B');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Fechamento de Vendas (Closer)', 'Tradução (Inglês-Português)', 'Curva ABC', 'Ferramentas de Autoria (Articulate, Captivate)');

-- Vaga 19: Estagiário em Microsoft Excel (Avançado) para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Estagiário em Microsoft Excel (Avançado)', 'Vaga para atuar com Microsoft Excel (Avançado).', 'Remoto', 'Remoto', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Coaching', 'Resistência dos Materiais', 'Microsoft Excel (Avançado)', 'Arquitetura de Cloud');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Acompanhamento Terapêutico (AT)', 'Automação Industrial (CLP/PLC)', 'Gerenciamento de Identidade (Active Directory)', 'Metodologias Ativas de Aprendizagem', 'Notion (Organização)');

-- Vaga 20: Analista de Inteligência Emocional Sênior para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Analista de Inteligência Emocional Sênior', 'Vaga para atuar com Inteligência Emocional.', 'Remoto', 'Remoto', 'R$ 6.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Paciência', 'Negociação Estratégica');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Inteligência Emocional', 'Alemão (Intermediário)', 'Plataformas (Zendesk, Freshdesk)');

-- Vaga 21: Especialista em Design Centrado no Usuário para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Especialista em Design Centrado no Usuário', 'Vaga para atuar com Design Centrado no Usuário.', 'Remoto', 'Remoto', 'R$ 10.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Zoom (Administração)', 'Criação de Personas', 'Orçamento (Budgeting)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('TypeScript', 'Higienização e Esterilização', 'Design Centrado no Usuário');

-- Vaga 22: Analista de Pesquisa com Usuários (User Research) Pleno para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Analista de Pesquisa com Usuários (User Research) Pleno', 'Vaga para atuar com Pesquisa com Usuários (User Research).', 'Remoto', 'Remoto', 'R$ 6.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Manutenção Preditiva/Preventiva', 'Ruby', 'Kanban');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Pesquisa com Usuários (User Research)', 'Direito do Consumidor', 'Logística Internacional (Importação/Exportação)');

-- Vaga 23: Analista de Análise de Funil Júnior para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Analista de Análise de Funil Júnior', 'Vaga para atuar com Análise de Funil.', 'Remoto', 'Remoto', 'R$ 4.500', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Transcrição', 'Análise de Funil', 'Elaboração de Pareceres');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Japonês (Intermediário)', 'Miro (Quadros Brancos)', 'Paciência');

-- Vaga 24: Especialista em Design Responsivo para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Especialista em Design Responsivo', 'Vaga para atuar com Design Responsivo.', 'Remoto', 'Remoto', 'R$ 10.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Proposta Comercial', 'Testes A/B', 'JavaScript', 'Transcrição');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Fotografia', 'Assessoria de Imprensa', 'Microsoft Word (Avançado)', 'Design Responsivo', 'Gestão de Frotas');

-- Vaga 25: Gerente de CRM (Salesforce, HubSpot, Pipedrive) para Data Analytics Corp
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp3, 'Gerente de CRM (Salesforce, HubSpot, Pipedrive)', 'Vaga para atuar com CRM (Salesforce, HubSpot, Pipedrive).', 'Remoto', 'Remoto', 'R$ 15.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Feedback de Clientes (Coleta e Análise)', 'Recrutamento e Seleção', 'Google Analytics');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Inbound Marketing', 'CRM (Salesforce, HubSpot, Pipedrive)', 'Saúde e Segurança do Trabalho (SST)', 'Cargos e Salários');

-- Vaga 26: Desenvolvedor Pair Programming Júnior para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Desenvolvedor Pair Programming Júnior', 'Vaga para atuar com Pair Programming.', 'Curitiba, PR', 'Híbrido', 'R$ 5.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Libras (Língua Brasileira de Sinais)', 'Virtualização (VMware, Hyper-V)', 'Adobe XD', 'Auditoria de Processos');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Negociação (Interpessoal)', 'Tesouraria', 'Pair Programming', 'Mercado de Capitais');

-- Vaga 27: Gerente de Compliance (Conformidade) para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Gerente de Compliance (Conformidade)', 'Vaga para atuar com Compliance (Conformidade).', 'Curitiba, PR', 'Híbrido', 'R$ 15.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Lean Manufacturing', 'Key Account Management (Gestão de Contas Chave)', 'Comunicação Interna', 'Google Agenda (Gestão Avançada)', 'Mandarim (Intermediário)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Gestão de Riscos', 'Pedagogia', 'Compliance (Conformidade)', 'Oratória e Apresentação', 'Data Warehousing');

-- Vaga 28: Estagiário em Definição de OKRs/KPIs para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Estagiário em Definição de OKRs/KPIs', 'Vaga para atuar com Definição de OKRs/KPIs.', 'Curitiba, PR', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Avaliação de Aprendizagem', 'Excel Avançado (Financeiro)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Valuation (Avaliação de Empresas)', 'Definição de OKRs/KPIs', 'Leitura e Interpretação de Desenho Técnico');

-- Vaga 29: Gerente de Prevenção à Lavagem de Dinheiro (PLD) para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Gerente de Prevenção à Lavagem de Dinheiro (PLD)', 'Vaga para atuar com Prevenção à Lavagem de Dinheiro (PLD).', 'Curitiba, PR', 'Híbrido', 'R$ 15.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Prospecção (Inbound/SDR)', 'Alemão (Intermediário)', 'Modelagem de Dados', 'Prevenção à Lavagem de Dinheiro (PLD)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Gestão Escolar', 'Cálculo de Impostos (ICMS, IPI, PIS/COFINS)', 'Facilities (Gestão de Infraestrutura)', 'Gestão de Pipeline', 'Motion Graphics (Adobe After Effects)');

-- Vaga 30: Desenvolvedor Ansible Sênior para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Desenvolvedor Ansible Sênior', 'Vaga para atuar com Ansible.', 'Remoto', 'Remoto', 'R$ 12.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Cargos e Salários', 'Delegação de Tarefas', 'SPIN Selling', 'Metodologias Ativas de Aprendizagem');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Enfermagem (Técnica)', 'Design Centrado no Usuário', 'Power Automate (Básico)', 'Marketing de Influência', 'Ansible');

-- Vaga 31: Especialista em Japonês (Intermediário) para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Especialista em Japonês (Intermediário)', 'Vaga para atuar com Japonês (Intermediário).', 'Remoto', 'Remoto', 'R$ 10.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Gestão de Backlog', 'Análise de Viabilidade Econômica');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Japonês (Intermediário)', 'Apresentações (PowerPoint, Google Slides)', 'Data Warehousing');

-- Vaga 32: Gerente de Colaboração para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Gerente de Colaboração', 'Vaga para atuar com Colaboração.', 'Curitiba, PR', 'Híbrido', 'R$ 20.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Automação de Marketing (RD Station, HubSpot)', 'Ferramentas de Captura de Tela (Snagit)', 'Colaboração', 'SharePoint (Gestão)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Gestão de Contratos', 'YouTube Marketing', 'Copywriting', 'AutoCAD (2D/3D)');

-- Vaga 33: Estagiário em Societário (Abertura/Fechamento de Empresas) para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Estagiário em Societário (Abertura/Fechamento de Empresas)', 'Vaga para atuar com Societário (Abertura/Fechamento de Empresas).', 'Curitiba, PR', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Plataformas EAD (Moodle, Hotmart)', 'Societário (Abertura/Fechamento de Empresas)', 'Feedback de Clientes (Coleta e Análise)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Conciliação Bancária', 'Pair Programming', 'Negociação (Técnicas)', 'Metrologia');

-- Vaga 34: Estagiário em Gerenciamento de Reuniões para Green House NGO
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp4, 'Estagiário em Gerenciamento de Reuniões', 'Vaga para atuar com Gerenciamento de Reuniões.', 'Curitiba, PR', 'Presencial', 'R$ 1.500', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Vue.js', 'Adobe XD', 'Gerenciamento de Reuniões', 'Liderança de Equipes');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Libras (Língua Brasileira de Sinais)', 'Atendimento ao Cliente (Multicanal)', 'Employer Branding', 'Software Jurídico (ProJuris, etc.)', 'Google Analytics');

-- Vaga 35: Desenvolvedor TypeScript Júnior para Fintech Revolution
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp5, 'Desenvolvedor TypeScript Júnior', 'Vaga para atuar com TypeScript.', 'Remoto', 'Remoto', 'R$ 8.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('TypeScript', 'Testes A/B');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Terraform', 'Modelagem Financeira', 'Pesquisa de Palavras-chave');

-- Vaga 36: Desenvolvedor Conciliação Bancária Júnior para Fintech Revolution
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp5, 'Desenvolvedor Conciliação Bancária Júnior', 'Vaga para atuar com Conciliação Bancária.', 'Remoto', 'Remoto', 'R$ 12.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Ferramentas da Qualidade (Ishikawa, Pareto)', 'Mediação e Arbitragem', 'Contêineres (Docker, Kubernetes)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('QlikView', 'Feedback (Dar e Receber)', 'Geração de Leads', 'Conciliação Bancária');

-- Vaga 37: Desenvolvedor Gestão de Mídias Sociais Sênior para Fintech Revolution
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp5, 'Desenvolvedor Gestão de Mídias Sociais Sênior', 'Vaga para atuar com Gestão de Mídias Sociais.', 'São Paulo, SP', 'Híbrido', 'R$ 12.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Direção de Arte', 'Entrevistas com Usuários', 'Espanhol (Intermediário)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Colaboração', 'Zoom (Administração)', 'Gestão de Mídias Sociais');

-- Vaga 39: Analista de Pedagogia Pleno para Fintech Revolution
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp5, 'Analista de Pedagogia Pleno', 'Vaga para atuar com Pedagogia.', 'São Paulo, SP', 'Presencial', 'R$ 3.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Metodologias Ativas de Aprendizagem', 'Six Sigma (Green/Black Belt)', 'Pedagogia');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Inglês (Avançado)', 'Captação de Imagem (Vídeo)', 'Logística (Visão Geral)');

-- Vaga 40: Analista de Assessoria de Imprensa Sênior para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Analista de Assessoria de Imprensa Sênior', 'Vaga para atuar com Assessoria de Imprensa.', 'Belo Horizonte, MG', 'Híbrido', 'R$ 4.500', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Foco no Cliente', 'User Stories (Histórias de Usuário)', 'DevOps');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Assessoria de Imprensa', 'Contas a Pagar e Receber', 'Prontuário Eletrônico');

-- Vaga 41: Especialista em QBR (Quarterly Business Review) para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Especialista em QBR (Quarterly Business Review)', 'Vaga para atuar com QBR (Quarterly Business Review).', 'Remoto', 'Remoto', 'R$ 10.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Direito do Consumidor', 'QBR (Quarterly Business Review)', 'Card Sorting', 'Design Responsivo');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Código de Conduta e Ética', 'Conciliação Bancária', 'Onboarding/Integração', 'Mentoria', 'Métricas (KPIs, ROAS, CPA)');

-- Vaga 42: Estagiário em Gestão Escolar para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Estagiário em Gestão Escolar', 'Vaga para atuar com Gestão Escolar.', 'Belo Horizonte, MG', 'Presencial', 'R$ 2.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Planejamento de Mídia', 'Gestão Escolar', 'Gestão de Projetos (Engenharia)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Escuta Ativa', 'Software Jurídico (ProJuris, etc.)', 'Zoom (Administração)');

-- Vaga 43: Analista de Atendimento ao Cliente (Multicanal) Júnior para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Analista de Atendimento ao Cliente (Multicanal) Júnior', 'Vaga para atuar com Atendimento ao Cliente (Multicanal).', 'Belo Horizonte, MG', 'Híbrido', 'R$ 3.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Java', 'Redação Técnica', 'Suporte Técnico (Hardware)', 'Lean Manufacturing');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Gestão da Qualidade', 'Foco', 'Atendimento ao Cliente (Multicanal)', 'Resolução de Conflitos', 'Automação Industrial (CLP/PLC)');

-- Vaga 44: Desenvolvedor Afiliação Pleno para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Desenvolvedor Afiliação Pleno', 'Vaga para atuar com Afiliação.', 'Remoto', 'Remoto', 'R$ 5.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Captação de Recursos (Fundraising)', 'OneDrive/Google Drive (Gestão de Arquivos)', 'Análise de Métricas de Suporte');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Massoterapia', 'Afiliação', 'Espanhol (Básico)');

-- Vaga 45: Gerente de Gestão de Produção (PCP) para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Gerente de Gestão de Produção (PCP)', 'Vaga para atuar com Gestão de Produção (PCP).', 'Belo Horizonte, MG', 'Híbrido', 'R$ 20.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Airtable', 'Up-selling');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Logística (Visão Geral)', 'Redação (Idioma Estrangeiro)', 'Gestão de Produção (PCP)');

-- Vaga 46: Desenvolvedor Follow-up Júnior para Constructora Solida
INSERT INTO vagas (id_empresa, titulo, descricao, localizacao, modalidade, salario, data_publicacao)
VALUES (@id_emp6, 'Desenvolvedor Follow-up Júnior', 'Vaga para atuar com Follow-up.', 'Belo Horizonte, MG', 'Híbrido', 'R$ 5.000', NOW());
SET @last_vaga = LAST_INSERT_ID();
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, TRUE FROM habilidades WHERE nome IN ('Produção de Videoaulas', 'Modelagem de Dados', 'Marketing de Conteúdo', 'Telemedicina (Suporte)');
INSERT INTO habilidades_vagas (id_vaga, id_habilidade, obrigatoria)
SELECT @last_vaga, id_habilidade, FALSE FROM habilidades WHERE nome IN ('Delegação', 'Google Agenda (Gestão Avançada)', 'Follow-up', 'Português (Redação Avançada)', 'Liderança');

-- ==========================================
-- 4. GERANDO CANDIDATURAS ALEATÓRIAS
-- ==========================================
-- Candidaturas para @id_cand1
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand1, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 5;

-- Candidaturas para @id_cand2
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand2, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 4;

-- Candidaturas para @id_cand3
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand3, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 6;

-- Candidaturas para @id_cand4
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand4, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 4;

-- Candidaturas para @id_cand5
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand5, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 3;

-- Candidaturas para @id_cand6
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand6, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 3;

-- Candidaturas para @id_cand7
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand7, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 7;

-- Candidaturas para @id_cand8
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand8, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 8;

-- Candidaturas para @id_cand9
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand9, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 3;

-- Candidaturas para @id_cand10
INSERT IGNORE INTO candidaturas (id_vaga, id_candidato, data_candidatura, status)
SELECT id_vaga, @id_cand10, NOW() - INTERVAL FLOOR(RAND()*30) DAY, ELT(FLOOR(1 + (RAND() * 4)), 'Enviado', 'Em Análise', 'Rejeitado', 'Aprovado')
FROM vagas ORDER BY RAND() LIMIT 8;

SELECT 'População massiva concluída!' AS status;