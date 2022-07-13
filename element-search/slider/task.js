'use strict';

const activeIndex = 0;
const navLeft = document.querySelector('.slider__arrow_prev');
const navRight = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__items'));

navRight.onclick = function() {
    activeIndex = slides.findIndex((value) => {value.classList.contains('slider__item_active')})
    slides[activeIndex].classList.toggle(slider__item_active);
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.toggle(slider__item_active);
}

navLeft.onclick = function() {
    activeIndex = slides.findIndex((value) => {value.classList.contains('slider__item_active')})
    slides[activeIndex].classList.toggle(slider__item_active);
    if (activeIndex > 0) {
        activeIndex - 1;
    } else {
        slides.length - 1;
    }
    slides[activeIndex].classList.toggle(slider__item_active);
}


