const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('aside');
const productDetail = document.getElementById('productDetail');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

function toggleDesktopMenu(){
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');

    if(isShoppingCartOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
    productDetail.classList.add('inactive');


    if(isShoppingCartOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    productDetail.classList.add('inactive');

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function showProductDetail(){
    shoppingCartContainer.classList.add('inactive');

    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');

    if(isShoppingCartOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    productDetail.classList.add('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetail)



const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Screen',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'PC',
    price: 630,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

const cartIcon = './icons/bt_add_to_cart.svg';
const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr){
    for(product of arr){
        // Div Contendor
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // Imagen de producto
        const productCardImg = document.createElement('img');
        productCardImg.setAttribute('src', product.image);
        productCardImg.addEventListener('click', showProductDetail);
    
        // Div Contendor de información de producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // Div Contendor de información de producto
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
    
        const productTitle = document.createElement('p');
        productTitle.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', cartIcon);
    
        // Ordenando Product Info
        productInfoDiv.append(productPrice, productTitle);
        productInfoFigure.appendChild(productInfoFigureImg);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        // Product Card
        productCard.append(productCardImg, productInfo);
    
        // Añadiendo al DOM
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);