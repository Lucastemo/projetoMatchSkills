  document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const tipoCandidato = document.querySelector('input[name="tipoLogin"]:checked').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
      const res = await fetch('/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({email, senha, tipoCandidato}),
        credentials:"include"
      })

      const data = await res.json();
      
      if(res.ok && data.auth){
      window.location.href = '/usuarios/menu';
    } else {
      alert(data.message || 'E-mail ou senha incorretos');
    }
    } catch (error) {
        console.error('Erro durante o login:', error);
        return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' })
    }
   })