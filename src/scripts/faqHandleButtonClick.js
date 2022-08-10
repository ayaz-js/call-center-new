import { faqButton, faqSection } from './constants';

function faqHandleButtonClick() {
    faqSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

faqButton.addEventListener('click', faqHandleButtonClick);
