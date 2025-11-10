document.addEventListener('DOMContentLoaded', () => {
    const buttonsWithLinks = document.querySelectorAll('button[data-href]');

    buttonsWithLinks.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.href;
            
            const target = button.dataset.target;

            if (url) {
                if (target === '_blank') {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        });
    });
});