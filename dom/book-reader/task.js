'use strict';

const book = document.getElementById('book');
const fontsArr = Array.from(document.querySelectorAll('a.font-size'));
const content = document.querySelector('.book__content');



const fontSwitch = function (event) {

    event.preventDefault();
    removeCircle();

    if (event.target.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        event.target.classList.add('font-size_active');
    } else if (event.target.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        event.target.classList.add('font-size_active');
    } else 
        book.classList.remove('book_fs-big', 'book_fs-small');
        event.target.classList.add('font-size_active');
}

function removeCircle() {
    for (let i = 0; i < fontsArr.length; i++) {
        fontsArr[i].classList.remove('font-size_active');
    }
}

document.addEventListener('click', fontSwitch);
