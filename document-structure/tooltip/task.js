'use strict';

const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((tooltip) => {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault();
    const tipTitle = event.target.title;
    const div = document.createElement('div');
    div.classList.add('tooltip');
    div.textContent = tipTitle;
    event.target.insertAdjacentElement('afterEnd', div);

    const activators = Array.from(document.querySelectorAll(".tooltip_active"));
    const findDiv = activators.find(div => div.classList.contains("tooltip_active"));

    if (findDiv === undefined) {
      div.classList.add('tooltip_active');
    } else {
      if (findDiv !== div) {
        div.classList.add('tooltip_active');
      } findDiv.classList.remove('tooltip_active')
    }
  })
})

//не получается реализовать снятие активного класса по клику