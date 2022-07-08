'use strict';

const isDead = document.getElementById('dead');
const isLost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 9; index++) {
    getHole(index).onclick = function () {
        if (getHole(index).classList.contains('hole_has-mole')) {
            isDead.textContent++;
            if (isDead.textContent == 10) {
                alert('Победа!');
                isDead.textContent = 0;
                isLost.textContent = 0;
            }
        } else {
            isLost.textContent++;
            if (isLost.textContent == 5) {
                alert('Вы проиграли');
                isDead.textContent = 0;
                isLost.textContent = 0;
            }
        }
    }
}

