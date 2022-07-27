'use strict';

const checkbox = document.querySelectorAll('.interest__check');

checkbox[0].addEventListener('change', () => {
  if (checkbox[0].checked) {
    checkbox[1].checked = true;
    checkbox[2].checked = true;
  } else {
    checkbox[1].checked = false;
    checkbox[2].checked = false;
  }
});

checkbox[3].addEventListener('change', () => {
  if (checkbox[3].checked) {
    checkbox[4].checked = true;
    checkbox[5].checked = true;
  } else {
    checkbox[4].checked = false;
    checkbox[5].checked = false;
  }
});
