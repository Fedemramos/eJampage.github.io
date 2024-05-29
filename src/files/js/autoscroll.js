function autoScrollText() {
    const wrapper = document.getElementById('scrolling-wrapper');
    let scrollAmount = 0;
    const speed = 2; 
    const delay = 50;

    function scroll() {
        wrapper.scrollLeft += speed;
        scrollAmount += speed;
        if (scrollAmount >= wrapper.scrollWidth - wrapper.clientWidth) {
            scrollAmount = 0;
            wrapper.scrollLeft = 0; 
        }
    }

    let scrollInterval = setInterval(scroll, delay);

   wrapper.addEventListener('mouseenter', function () {
        clearInterval(scrollInterval);
    });

    
    wrapper.addEventListener('mouseleave', function () {
        scrollInterval = setInterval(scroll, delay);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    const screenWidth = window.innerWidth;
    const breakpoint = 768; 
    if (screenWidth < breakpoint) {
        autoScrollText();
    }
});
