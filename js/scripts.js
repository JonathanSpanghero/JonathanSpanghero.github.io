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
