document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');

    function checkScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
            header.style.opacity = '0';
        } else {
            header.style.opacity = '1';
        }
    }

    window.addEventListener('scroll', checkScroll);
});