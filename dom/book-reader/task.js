'use strict';

const book = document.getElementById('book');
const fontsArr = Array.from(document.querySelectorAll('.font-size'));
const content = document.querySelector('.book__content');
let index = fontsArr.findIndex((elem) => elem.classList.contains('font-size_active'));

const fontSwitch = function (event) {
    
    fontsArr[index].classList.remove('font-size_active');
    event.preventDefault();

    if (event.target.className.includes('font-size_big')) {
        book.classList.add('book_fs-big');
    } else if (event.target.className.includes('font-size_small')) {
        book.classList.add('book_fs-small');
    } else 
        book.classList.remove('book_fs-big', 'book_fs-small');
}

document.addEventListener('click', fontSwitch);