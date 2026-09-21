let isMenuOpen = false;
let navbar = document.querySelector('nav');

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}