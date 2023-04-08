const nav_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMobileMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cards = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#product-detail');

nav_email.addEventListener('click', toggleDesktopMenu);
burguerMobileMenu.addEventListener('click', toggleMobileMenu);
navShoppingCart.addEventListener('click', shoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

  if (!shoppingCartContainer.classList.contains('inactive')) {
    shoppingCartContainer.classList.add('inactive');
  }

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');

  if (!shoppingCartContainer.classList.contains('inactive')) {
    shoppingCartContainer.classList.add('inactive');
  }
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive');
  }
}

function shoppingCart() {
  shoppingCartContainer.classList.toggle('inactive');

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  }
  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.add('inactive');
  }
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive');
  }
}

function closeProductDetail() {
  productDetail.classList.add('inactive');
}

function openProductDetail (){
  productDetail.classList.remove('inactive');
}

// Crear un Array para introducirle diferentes productos
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 840,
  image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
  name: 'MicroHondas',
  price: 350,
  image: 'https://images.pexels.com/photos/6588598/pexels-photo-6588598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
  name: 'SmartPhone',
  price: 560,
  image: 'https://images.pexels.com/photos/5083411/pexels-photo-5083411.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

function renderProducts (p) {
  //Iteramos sobre el Array para hacer una correcta manipulacion del DOM
for (p of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImage = document.createElement('img');
  productImage.setAttribute('src', p.image);
  productImage.addEventListener('click', openProductDetail);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + p.price; 
  const productName = document.createElement('p');
  productName.innerText = p.name;  

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', '../assets/icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  cards.appendChild(productCard);
}
  
}

renderProducts(productList);