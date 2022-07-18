'use strict';

let navLeft = document.querySelector('.slider__arrow_prev');
let navRight = document.querySelector('.slider__arrow_next');
let arrows = Array.from(document.querySelectorAll('.slider__arrow'))
let slides = Array.from(document.querySelectorAll('.slider__item'));
let activeIndex = slides.findIndex((slide) => slide.classList.contains('slider__item_active'))  //находим активный слайд через индекс

for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = function () {
        slides[activeIndex].classList.remove('slider__item_active');
        if (arrows[i] === navRight) {
            activeIndex++;
        } else {
            activeIndex--;
        }
        if (activeIndex === slides.length) {
            activeIndex = 0;
        }
        if (activeIndex === -1) {
            activeIndex = slides.length - 1;
        }
        slides[activeIndex].classList.add('slider__item_active');
    };
}

