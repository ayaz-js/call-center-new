function accardionCreate() {
    const faqBtn = document.querySelectorAll('.faq__accardion-button');
    const faqPanelClass = 'faq__accardion-panel-active';
    const faqBtnActive = 'faq__accardion-button-active';

    for (const value of faqBtn) {
        value.addEventListener('click', () => {
            value.classList.toggle(faqBtnActive);
            const faqPanel = value.nextElementSibling;

            if (faqPanel.classList.contains(faqPanelClass)) {
                faqPanel.classList.remove(faqPanelClass);
            } else {
                faqPanel.classList.add(faqPanelClass);
            }
        });
    }
}

accardionCreate();
