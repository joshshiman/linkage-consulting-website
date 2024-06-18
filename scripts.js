document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    let lastScrollTop = 0;
    const scrollThreshold = 100; // Adjust as needed

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });

    // Show/hide navbar on scroll
    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.classList.add("hide");
            header.classList.remove("show");
        } else {
            header.classList.add("show");
            header.classList.remove("hide");
        }
        lastScrollTop = scrollTop;
    });
});