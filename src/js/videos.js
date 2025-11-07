document.addEventListener('DOMContentLoaded', (event) => {
    // 1. O contêiner onde o vídeo será exibido
    const videoContainer = document.querySelector('#video-player-section .tela');

    // 2. A lista de botões
    const listaAulas = document.getElementById('lista-aulas-botoes');

    listaAulas.addEventListener('click', function(event) {
        // Verifica se o clique foi em um botão de aula
        if (event.target.classList.contains('btn-assistir')) {
            // 3. Pega a URL de embed (incorporação) do vídeo
            const videoUrl = event.target.getAttribute('data-video-url');
            
            if (videoUrl) {
                // 4. Monta o HTML do player de vídeo (iframe é o padrão para embeds)
                // Recomenda-se adicionar classes CSS para estilizar o player (responsividade)
                const videoPlayerHTML = `
                    <iframe 
                        width="60%" 
                        height="600" 
                        src="${videoUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                `;

                // 5. Injeta o HTML no container
                videoContainer.innerHTML = videoPlayerHTML;

                // Opcional: Rolar a página para o vídeo (para melhor UX, especialmente no celular)
                videoContainer.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});