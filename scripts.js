document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});