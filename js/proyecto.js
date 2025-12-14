// Lógica de Scroll y Animación 
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

window.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationName = 'fadeInUP';
            card.style.animationDuration = '0.5s';
            card.style.animationFillMode = 'forwards';
        }, 100 * index);
    });
    
    // Lógica para el Menú Hamburguesa (NUEVA)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar el ícono (hamburguesa <-> X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars'); 
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cierre automático del menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    // Restaura el ícono a barras
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});