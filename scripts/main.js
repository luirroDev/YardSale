const nav_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMobileMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

nav_email.addEventListener('click', toggleDesktopMenu);
burguerMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}