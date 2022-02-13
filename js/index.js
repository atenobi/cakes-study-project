const burgerButtonEl = document.getElementById('js-responsive-menu-button');
const mobileMenuEl = document.getElementById('js-nav-menu');

const showMenuFunc = () => {
    mobileMenuEl.classList.toggle('mobile-menu');  
};

burgerButtonEl.addEventListener('click', showMenuFunc);