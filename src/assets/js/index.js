'use strict'

const accordionHeader = document.getElementsByClassName('accordion-header');
const accordionContent = document.getElementsByClassName('accordion-content');

for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', () => {
        accordionContent[i].classList.toggle('active');
    });
}