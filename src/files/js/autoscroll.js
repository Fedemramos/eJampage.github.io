function autoScrollText() {
    const wrapper = document.getElementById('scrolling-wrapper');
    let scrollAmount = 0;
    const speed = 2; // Velocidad del desplazamiento, puedes ajustar este valor según tu preferencia
    const delay = 50; // Retraso en milisegundos, puedes ajustar este valor según tu preferencia

    function scroll() {
        wrapper.scrollLeft += speed;
        scrollAmount += speed;
        if (scrollAmount >= wrapper.scrollWidth - wrapper.clientWidth) {
            scrollAmount = 0;
            wrapper.scrollLeft = 0; // Vuelve al principio del contenedor cuando llega al final
        }
    }

    let scrollInterval = setInterval(scroll, delay);

    // Detener el desplazamiento al pasar el cursor sobre el texto
    wrapper.addEventListener('mouseenter', function () {
        clearInterval(scrollInterval);
    });

    // Reanudar el desplazamiento cuando se retira el cursor del texto
    wrapper.addEventListener('mouseleave', function () {
        scrollInterval = setInterval(scroll, delay);
    });
}

// Llama a la función autoScrollText si el ancho de la pantalla es menor que cierto valor (ajustable)
window.addEventListener('DOMContentLoaded', function () {
    const screenWidth = window.innerWidth;
    const breakpoint = 768; // Puedes ajustar este valor según tus necesidades
    if (screenWidth < breakpoint) {
        autoScrollText();
    }
});