
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"').forEach
    (anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'Smooth'
            })
        })
    })

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navegador = document.querySelector('.navegador');
        window.scrollY > 50 ?
            navegador.style.backgroundColor = 'rgba(10,10,10,0.98)' :
            navegador.style.backgroundColor = 'rgba(10,10,10,0.95)';
    })

    // Lógica para el Menú Hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Función para alternar el menú
menuToggle.addEventListener('click', () => {
    // Añade o quita la clase 'active' a los enlaces
    navLinks.classList.toggle('active');
    
    // Opcional: Cambiar el ícono (hamburguesa <-> X)
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars'); // Quita el ícono de barras
        icon.classList.add('fa-times'); // Pone el ícono de la "X"
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cierre automático del menú al hacer clic en un enlace (en móvil)
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


