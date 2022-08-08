const faqSection = document.querySelector('.faq');
const faqButton = document.querySelector('.faq-button');

function faqHandleButtonClick() {
    faqSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

faqButton.addEventListener('click', faqHandleButtonClick);
