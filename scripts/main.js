const nav_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMobileMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

nav_email.addEventListener('click', toggleDesktopMenu);
burguerMobileMenu.addEventListener('click', toggleMobileMenu);
navShoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive');
  }

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');

  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive');
  }
}

function toggleProductDetail() {
  productDetail.classList.toggle('inactive');

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  }
  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.add('inactive');
  }
}