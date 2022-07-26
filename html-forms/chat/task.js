'use strict';

const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

const botAnswers = ['Ну привет', 'Ты кто??', 'Я вас не особо то слушаю', 'Что хотите узнать то?', 'Бла бла бла'];

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

function sendMessageBot() {
    for (let i = 0; i < botAnswers.length; i++) {
        return botAnswers[Math.floor(Math.random() * botAnswers.length)];
    }
}

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13 && event.target.value != '') {
        messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${event.target.value}</div>
    </div>
    <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${sendMessageBot()}</div>
    </div>
    `;
    event.target.value = '';
    }
})
