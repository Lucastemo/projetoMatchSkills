document.querySelector('.logout-btn').addEventListener('click', async (e) => {
    e.preventDefault()
        try {
            const res = await fetch('/usuarios/logout', {
                method: 'POST',
                credentials: "include"
            });

            const data = await res.json();

            if(res.ok){
                location.href = '/';
            }else{
                window.showNotification(data.message || 'Erro ao fazer logout.', 'error');
            }
        } catch (error) {
            console.error('Erro no logout: ', error);
            window.showNotification('Erro de comunicação com o servidor.', 'error');
        }
    });