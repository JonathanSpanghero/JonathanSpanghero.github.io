// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top <= (window.innerHeight * 0.8) && rect.bottom >= 0;
            if (isVisible) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible"); // opcional: remove a classe se a seção sair da visualização
            }
        });
    }

    // Verifica visibilidade ao rolar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Checa ao carregar a página
    
});

// Seleciona o botão hamburguer e o menu
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('header nav');

// Adiciona um evento de clique ao botão hamburguer
hamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' no menu ao clicar no hamburguer
    menu.classList.toggle('active');
});

