'use strict';

/*
const menuFinder = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = document.querySelectorAll('ul.menu menu_sub');

for (let i = 0; i < menuFinder.length; i++) {
    menuFinder[i].onclick = function(){
        if (menuFinder[i].closest('.menu__item').closest('.menu_sub')) {
            menuSub.classList.add('menu_active');
        } 
    }
}
*/

const menuFinder = Array.from(document.querySelectorAll('.menu__item'));
const menuSub = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuFinder.length; i++) {
    if (menuFinder[i].querySelector('.menu_sub')) {
        menuFinder[i].querySelector('.menu__link').onclick = function() {
            menuFinder[i].querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
}

/* 
Из лекции с методом forEach

const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault;
        console.log(event.target);

        const parent = console.log(event.target.closest('.menu__item'));
        console.log(parent);

        const submenu = parent.querySelector('.menu_sub');
        console.log(submenu);
    })
})
*/