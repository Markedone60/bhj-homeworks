'use strict';

//2 subtasks -
// 1 - on btn click menu is open
// use eventlistener/cick on a button - will toggle class

// 2 - we have elements of the list
// when we click on them they change textformat 
// we can use eventlistener on a single link or delegate on a parent


const mainValue = document.querySelector('.dropdown__value');
const mainList = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdown = document.querySelector('.dropdown');

const renamer = function (event) {
    event.preventDefault();
    mainValue.textContent = event.target.closest('.dropdown__item').textContent;
}

const opener = function () {
    mainList.classList.toggle("dropdown__list_active");
    if (mainList.classList.contains("dropdown__list_active")) {
        items.forEach((item) => item.addEventListener("click", renamer));
    }
};

dropdown.addEventListener("click", opener);



