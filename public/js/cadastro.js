// Envio do formulário com Fetch
document.getElementById('formCadastro').addEventListener('submit', async function (e) {
    e.preventDefault();

    const tipo_usuario = document.querySelector('input[name="tipoCadastro"]:checked').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        window.showNotification('As senhas não coincidem.', 'error');
        return;
    }

    // Monta o corpo da requisição
    const data = {
        tipo_usuario: tipo_usuario,
        email: email,
        senha: senha,
        nome: document.getElementById('nomeCompleto').value,
        cpf: document.getElementById('cpf').value,
        razao_social: document.getElementById('razaoSocial').value,
        cnpj: document.getElementById('cnpj').value
    };

    try {
        const response = await fetch('/usuarios/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            window.showNotification(result.message, 'success');
            setTimeout(() => window.location.href = '/login', 2000);
        } else {
            window.showNotification(result.error || 'Ocorreu um erro ao cadastrar.', 'error');
        }

    } catch (error) {
        console.error('Erro ao enviar cadastro:', error);
        window.showNotification('Erro de comunicação com o servidor.', 'error');
    }
});