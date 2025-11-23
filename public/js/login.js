  document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const tipoLogin = document.querySelector('input[name="tipoLogin"]:checked').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
      const response = await fetch('/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({ email, senha, tipoLogin }),
        credentials:"include"
      })

      const data = await response.json();
      
      if (response.ok && data.auth) {
        window.location.href = '/usuarios/menu';
      } else {
        window.showNotification(data.message || 'Ocorreu um erro ao tentar fazer login.', 'error');
      }
    } catch (error) {
        console.error('Erro durante o login:', error);
        window.showNotification('Ocorreu um erro ao processar a solicitação.', 'error');
    }
   })