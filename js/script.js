
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

    // Custom cursor
    //  Obtener el elemento del cursor del DOM
    const cursor = document.querySelector('.cursor');
    // 2. Variables para almacenar la posición del ratón
    let mouseX = 0, 
        mouseY = 0; 

    // 3. Función principal que mueve el cursor
    const cursorMove = () => {
    // Posicionar el cursor con las coordenadas del ratón
    // Se usa `left` y `top` para la posición
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    
    // Mueve el cursor -50% de su tamaño para que el centro
    // del círculo siga la punta del ratón (y no la esquina superior izquierda)
    cursor.style.transform = 'translate(-50%, -50%)'; 

    // Solicita la siguiente animación de fotograma, lo que crea un bucle suave
    requestAnimationFrame(cursorMove);
    }

    // Iniciar el bucle de animación
    cursorMove();

    // Listener para capturar la posición del ratón en tiempo real
    document.addEventListener('mousemove', (e) => {
    // `e.clientX` y `e.clientY` obtienen la posición actual del ratón
    mouseX = e.clientX;
    mouseY = e.clientY;

    });



