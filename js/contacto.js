/* js/contacto.js */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario-contacto form');
    const botonEnviar = formulario.querySelector('.boton-enviar');

    if (formulario) {
        formulario.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que la página se recargue o use la redirección por defecto de la API

            // Feedback visual: deshabilitamos el botón mientras se envía
            const textoOriginal = botonEnviar.innerText;
            botonEnviar.disabled = true;
            botonEnviar.innerText = "Enviando...";

            // Recopilamos los datos del formulario
            const formData = new FormData(formulario);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();

                if (response.status === 200) {
                    // ÉXITO: Forzamos la redirección a tu página de gracias
                    window.location.href = "https://juan-diego22.github.io/Portafolio-JuanDiego/gracias.html";
                } else {
                    // Si algo falla en la API
                    console.error(result);
                    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
                }
            } catch (error) {
                // Si hay un error de red
                console.error(error);
                alert("Error de conexión al servidor.");
            } finally {
                // Restauramos el botón si no hubo redirección
                botonEnviar.disabled = false;
                botonEnviar.innerText = textoOriginal;
            }
        });
    }
});