'use strict';

// clicker__counter
// cookie

const counter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

image.onclick = function() {
    counter.textContent++;
    if (counter.textContent % 2 == 0) {
        image.width = 200;
    } else {
        image.width = 150;
    }
};