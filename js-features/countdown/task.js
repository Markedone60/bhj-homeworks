'use strict';

// id = status
// id = timer

const timer = document.getElementById("timer");

const timerCountdown = function() {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        window.alert("Вы победили в конкурсе!");
        clearInterval(interval);
    }
}

const interval = setInterval(timerCountdown, 1000);

