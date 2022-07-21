'use strict';

const rotatorArr = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function rotatorSwitcher() {
    for (let i = 0; i < rotatorArr.length; i++) {
        if (i === index) {
            rotatorArr[i].classList.add('rotator__case_active');
        } else {
            rotatorArr[i].classList.remove('rotator__case_active'); 
        }
        
    }
    index++;

    if (index === rotatorArr.length - 1) {
        index = 0;
    }
}

const interval = setInterval(rotatorSwitcher, 1000);