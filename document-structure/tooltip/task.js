'use strict';

const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {
   const div = document.createElement('div');
   div.textContent = tooltip.title;

   tooltip.addEventListener('click', (event) => {
      event.preventDefault();
      div.classList.add('tooltip');
      tooltip.insertAdjacentElement('beforeEnd', div);
      div.style.left = `${tooltip.getBoundingClientRect().left}px`;
      div.style.top = `${tooltip.getBoundingClientRect().bottom}px`;

      const activators = Array.from(document.querySelectorAll('.tooltip_active'));
      const findDiv = activators.find(div => div.classList.contains('tooltip_active'));

      if (findDiv === undefined) {
         div.classList.add('tooltip_active');
      } else {
         if (findDiv !== div) {
            div.classList.add('tooltip_active');
         }
         findDiv.classList.remove('tooltip_active');
      }
   }
   )
})
