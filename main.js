const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isProductDetailOpen){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isProductDetailOpen){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);



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

/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>
*/


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