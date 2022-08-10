/* eslint-disable */

import { 
    faqButton, 
    mobileMenu, 
    mobileMenuCloseButton, 
    selectMenuItem 
} from './constants';

function closeMenu() {
    mobileMenu.classList.remove('nav__wrapper_mobile_opened');
    document.body.style.overflow = 'auto';
}

function closeOnSelectMenuItem(event) {
    const { target } = event;

    if (target && target.classList.contains('nav__menu-link')) {
        closeMenu();
    }
}

mobileMenuCloseButton.addEventListener('click', closeMenu);

selectMenuItem.addEventListener('click', closeOnSelectMenuItem);

faqButton.addEventListener('click', closeMenu);
