   // Envio do formulário com Fetch
        document.getElementById('formCadastro').addEventListener('submit', async function (e) {
            e.preventDefault();

            const tipoCadastro = document.querySelector('input[name="tipoCadastro"]:checked').value;
            const nome = document.getElementById('nomeCompleto').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmarSenha').value;

            // Validação de senha
            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem.');
                return;
            }

            // Dados de candidato
            const cpf = document.getElementById('cpf').value;

            // Dados de empresa
            const cnpj = document.getElementById('cnpj').value;
            const razao_social = document.getElementById('razaoSocial').value;

            // Monta o corpo da requisição
            const data = {
                nome: tipoCadastro === 'empresa' ? razao_social : nome,
                email: email,
                senha: senha,
                tipo_usuario: tipoCadastro,
                cpf: tipoCadastro === 'candidato' ? cpf : null,
                cnpj: tipoCadastro === 'empresa' ? cnpj : null,
                razao_social: tipoCadastro === 'empresa' ? razao_social : null
            };

            try {
                const response = await fetch('/usuarios/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message || 'Cadastro realizado com sucesso!');
                    window.location.href = '/login';
                } else {
                    alert(result.error || 'Erro ao cadastrar usuário.');
                }

            } catch (error) {
                console.error('Erro ao enviar cadastro:', error);
                alert('Erro ao se comunicar com o servidor.');
            }
        });