document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    function checkScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
            header.classList.add('hide');
            header.classList.remove('show');
        } else {
            header.classList.add('show');
            header.classList.remove('hide');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', checkScroll);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul.mobile-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});