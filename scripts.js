document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');
    let lastScroll = 0;

    function checkScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll && heroBottom <= 0) {
            header.classList.add('hide');
            header.classList.remove('show');
        } else if (currentScroll < lastScroll || heroBottom > 0) {
            header.classList.add('show');
            header.classList.remove('hide');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', checkScroll);
});