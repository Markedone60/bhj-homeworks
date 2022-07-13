'use strict';

const popupWindow = Array.from(document.querySelectorAll('.modal'));
const popupClose = Array.from(document.querySelectorAll('div.modal__close'));
const statusChange = Array.from(document.getElementsByClassName('show-success'));

popupWindow[0].classList.add('modal_active');

for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].onclick = function() {
        if (popupClose[i].closest('.modal_active')) {
            popupClose[i].closest('.modal_active').classList.remove('modal_active');
        }
    }
}

statusChange[0].onclick = function() {
    popupWindow[0].classList.toggle('modal_active');
    popupWindow[1].classList.toggle('modal_active');
}

