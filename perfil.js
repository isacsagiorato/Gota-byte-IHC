document.addEventListener('DOMContentLoaded', function() {
    const profilesContainer = document.getElementById('profiles-container');
    const addProfileBtn = document.getElementById('add-profile-btn');
    const addProfileModal = document.getElementById('add-profile-modal');
    const cancelAddProfile = document.getElementById('cancel-add-profile');
    const confirmAddProfile = document.getElementById('confirm-add-profile');
    const profileNameInput = document.getElementById('profile-name');
    const manageButton = document.querySelector('button.mt-16'); // botão "Gerenciar perfis"

    let profiles = [];
    let isManaging = false; // flag para modo gerenciar

    function renderProfiles() {
        profilesContainer.innerHTML = '';

        profiles.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.className = 'w-32 flex flex-col items-center cursor-pointer profile-card relative';

            profileElement.innerHTML = `
                <div class="w-24 h-24 rounded-md flex items-center justify-center mb-3 relative" style="background-color: ${profile.color}">
                    <i class="fas fa-user text-3xl text-white"></i>
                    ${isManaging ? `<button class="delete-btn absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700" title="Excluir perfil">&times;</button>` : ''}
                </div>
                <span>${profile.name}</span>
            `;

            // Seleciona perfil se não estiver gerenciando
            profileElement.addEventListener('click', function(e) {
                if (isManaging) return; // não seleciona no modo gerenciar
                alert(`Perfil ${profile.name} selecionado!`);
            });

            if (isManaging) {
                profileElement.querySelector('.delete-btn').addEventListener('click', function(e) {
                    e.stopPropagation();
                    profiles = profiles.filter(p => p.id !== profile.id);
                    renderProfiles();
                });
            }

            profilesContainer.appendChild(profileElement);
        });

        profilesContainer.appendChild(addProfileBtn);
    }

    addProfileBtn.addEventListener('click', function() {
        if (isManaging) return; // desativa adicionar perfil no modo gerenciar
        addProfileModal.classList.remove('opacity-0', 'pointer-events-none');
        profileNameInput.focus();
    });

    cancelAddProfile.addEventListener('click', function() {
        addProfileModal.classList.add('opacity-0', 'pointer-events-none');
        profileNameInput.value = '';
    });

    confirmAddProfile.addEventListener('click', function() {
        const name = profileNameInput.value.trim();
        if (name) {
            const colors = ['#E50914', '#0071EB', '#46D369', '#B81D24', '#221F1F', '#F5F5F1'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newProfile = {
                id: Date.now(),
                name,
                color: randomColor
            };

            profiles.push(newProfile);
            renderProfiles();

            addProfileModal.classList.add('opacity-0', 'pointer-events-none');
            profileNameInput.value = '';
        }
    });

    addProfileModal.addEventListener('click', function(e) {
        if (e.target === addProfileModal) {
            addProfileModal.classList.add('opacity-0', 'pointer-events-none');
            profileNameInput.value = '';
        }
    });

    // Controle do botão Gerenciar perfis
    manageButton.addEventListener('click', function() {
        isManaging = !isManaging;
        manageButton.textContent = isManaging ? 'Concluir gerenciamento' : 'Gerenciar perfis';
        renderProfiles();
    });

    renderProfiles();
});
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
        }// Alterna menu mobile
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