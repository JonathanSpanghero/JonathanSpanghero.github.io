document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Chamada inicial para aplicar a classe visible
});


// Seleciona o botão hamburguer e o menu
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('header nav');

// Adiciona um evento de clique ao botão hamburguer
hamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' no menu ao clicar no hamburguer
    menu.classList.toggle('active');
});

