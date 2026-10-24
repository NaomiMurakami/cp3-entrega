document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.querySelector('.trilho');
    const body = document.querySelector('body');

    if (trilho && body) {
        // Verificar se já existe um tema salvo no localStorage ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            trilho.classList.add('dark');
            body.classList.add('dark');
        }

        // Alternar o tema ao clicar no trilho
        trilho.addEventListener('click', () => {
            trilho.classList.toggle('dark');
            body.classList.toggle('dark');

            // Salvar o estado atual no localStorage
            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});