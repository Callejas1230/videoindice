const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 300}px)`;
}
// Selecciona el ícono de menú y el menú
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Añade un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    // Alterna la clase 'active' en el menú
    navMenu.classList.toggle('active');
});
