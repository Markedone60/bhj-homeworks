'use strict';

const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


function addText (event) {
  
  if (input.value != '') {
    event.preventDefault();
    taskList.insertAdjacentHTML('beforeEnd',`<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
    );
    input.value = '';
  }
}

btn.addEventListener('click', addText);


function removeText (event) {
  if (event.target.classList.contains('task__remove')) {
    event.preventDefault();
    event.target.closest('.task').remove();
  }
}

taskList.addEventListener('click', removeText);



