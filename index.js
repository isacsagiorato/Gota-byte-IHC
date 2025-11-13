function selectoption(option) {
    if (option === 'pfpj') {
        alert('Você selecionou o acesso para Pessoa Física/Jurídica');
        // Redirecionar para página de login PF/PJ
        // window.location.href = '/login-pfpj';
    } else if (option === 'prefeitura') {
        alert('Você selecionou o acesso para Prefeitura');
        // Redirecionar para página de login Prefeitura
        // window.location.href = '/login-prefeitura';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('text-cyan-600', 'font-semibold');
        } else {
            link.classList.add('text-gray-600', 'hover:text-cyan-600');
        }
    });
}); // Toggle menu mobile
        document.getElementById('menu-button').addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Abrir primeiro item do FAQ
        document.addEventListener('DOMContentLoaded', function () {
            const firstFaq = document.querySelector('.faq-item');
            if (firstFaq) firstFaq.classList.add('active');

            // Destacar link atual
            const links = document.querySelectorAll('.nav-link');
            const currentPage = window.location.pathname.split('/').pop();

            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('text-cyan-600', 'font-semibold');
                } else {
                    link.classList.add('text-gray-600', 'hover:text-cyan-600');
                }
            });
        });

        // FAQ toggle
        function toggleFAQ(element) {
            const faqItem = element.closest('.faq-item');
            faqItem.classList.toggle('active');

            const container = faqItem.parentElement;
            container.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
        }
        // Alterna menu mobile
    document.getElementById('menu-button').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Destaque do link ativo (hover fixo)
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop(); // pega o nome do arquivo atual

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                // Aplica estilo hover fixo no link ativo
                link.classList.add('text-cyan-600', 'font-semibold');
                link.classList.remove('text-gray-600');
            } else {
                // Links não ativos ficam cinza com hover cyan
                link.classList.add('text-gray-600', 'hover:text-cyan-600');
                link.classList.remove('text-cyan-600', 'font-semibold');
            }
        });
    });
