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


