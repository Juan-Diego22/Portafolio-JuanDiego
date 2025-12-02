    // JavaScript para la página de proyectos
window.addEventListener('scroll', () => {
    const navegador = document.querySelector('.navegador');
    if (window.scrollY > 50) {
        navegador.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navegador.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
    } else {
        navegador.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
        navegador.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// Animación de entrada de las tarjetas de proyecto
window.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationName = 'fadeInUP';
            card.style.animationDuration = '0.5s';
            card.style.animationFillMode = 'forwards';
        }, 100 * index);
    });
});
