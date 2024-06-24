document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle functionality
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});