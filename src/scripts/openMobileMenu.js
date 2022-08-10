import { mobileMenu, mobileMenuButton } from './constants';

function showMenu() {
    mobileMenu.classList.add('nav__wrapper_opened');
    document.body.style.overflow = 'hidden';
}

mobileMenuButton.addEventListener('click', showMenu);
