'use strict';

const revealElem = Array.from(document.querySelectorAll('.reveal'));

function revealPosition(){
    for (let i = 0; i < revealElem.length; i++) {
        const { top, bottom } = revealElem[i].getBoundingClientRect();
        
        if (bottom < 0 && top > window.innerHeight) {
            return false;
        } else {
            revealElem[i].classList.add('reveal_active');
        }
    }
}

document.addEventListener('scroll', revealPosition);

