const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
BurguerMenuIcon.addEventListener('click', toggleMobileMenu);

