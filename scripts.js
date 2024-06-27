document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle functionality
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});

function scrollLeft() {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: -400, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: 400, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    leftButton.addEventListener('click', scrollLeft);
    rightButton.addEventListener('click', scrollRight);
});