# 🎯 Match Skills

![Badge](https://img.shields.io/badge/status-Finalizado-purple)
![Badge](https://img.shields.io/badge/tech-Node.js-green)
![Badge](https://img.shields.io/badge/database-MySQL-blue)

## 📝 Sobre o Projeto

**Match Skills** é uma plataforma inovadora de recrutamento e seleção que conecta candidatos a vagas de emprego com base em suas habilidades (skills). O sistema permite que empresas publiquem vagas especificando as competências necessárias e que candidatos encontrem oportunidades que correspondam perfeitamente ao seu perfil técnico e comportamental.

O objetivo é tornar o processo de contratação mais justo, eficiente e transparente, focando no que realmente importa: o "match" perfeito de habilidades.

---

## 🚀 Tecnologias Utilizadas

*   **Backend:** Node.js, Express.js
*   **Banco de Dados:** MySQL
*   **Frontend:** HTML5, CSS3, JavaScript
*   **Gerenciamento de Sessão:** `express-session`

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento localmente.

### Pré-requisitos

*   Node.js
*   NPM (geralmente instalado com o Node.js)
*   Um servidor de banco de dados MySQL (Ex: MySQL Community Server, XAMPP, WAMP).

### Passos de Instalação

1.  **Clone o repositório** para sua máquina local:
    ```bash
    git clone https://github.com/Lucastemo/projetoMatchSkills.git
    ```

2.  **Acesse o diretório** do projeto:
    ```bash
    cd projetoMatchSkills
    ```

3.  **Instale as dependências** do Node.js necessárias para o projeto:
    ```bash
    npm install
    ```

4.  **Configure o Banco de Dados**:
    *   Crie um novo banco de dados no seu servidor MySQL.
    *   Execute o script `database.sql` para criar todas as tabelas e a estrutura inicial.
    *   Em seguida, execute o script `procedures.sql` para criar todos os procedimentos armazenados necessários para a aplicação.

5.  **(Opcional) Popule a tabela de habilidades**:
    *   Para ter uma base de habilidades pré-cadastradas, execute o script `habilidades-inserts.sql` no seu banco de dados.

6.  **(Opcional) Popule o banco com dados de teste**:
    *   Se desejar ter um ambiente com dados de empresas, candidatos, vagas e candidaturas para facilitar os testes, execute o script `placeholders.sql`.
    > **Atenção:** Execute este passo apenas após o passo 5, pois ele depende das habilidades já existentes.

7.  **Crie o arquivo de variáveis de ambiente**:
    *   Crie um arquivo chamado `.env` na raiz do projeto.
    *   Copie o conteúdo do arquivo `.env.example` e cole no novo arquivo `.env`.
    *   Preencha as variáveis com as suas credenciais de acesso ao banco de dados e outras configurações necessárias.

    Exemplo do arquivo `.env`:
    ```
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_seu_banco
    DB_PORT=3306
    PORT=3000
    SESSION_SECRET=uma_frase_super_secreta_e_aleatoria
    ```

8.  **Inicie o servidor**:
    *   Com tudo configurado, execute o comando abaixo para iniciar a aplicação:
    ```bash
    node server.js
    ```
    *   Você verá a mensagem `Servidor rodando na porta 3000` no terminal.

9.  **Acesse a aplicação**:
    *   Abra seu navegador e acesse http://localhost:3000.

---

Pronto! Agora você tem o ambiente completo do **Match Skills** rodando na sua máquina.

