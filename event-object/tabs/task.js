'use strict';

const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        for (let j = 0; j < tabs.length; j++) {
            if (tabs.indexOf(event.currentTarget) === j) {
                tabs[j].classList.add('tab_active');
                contents[j].classList.add('tab__content_active');
            } else {
                tabs[j].classList.remove('tab_active');
                contents[j].classList.remove('tab__content_active');
            }
        }	return false;	
    })
}

// tips from lection: 

// use indexof to find active element 
// use found index to add additional class
// to find elements separately without parents etc.
// using cycle to iterate through arr.links

/*
function tabClick(event) {
    const newIndex = tabs.findIndex((tab) => tab.classList.contains('tab_active')); 
    tabs[newIndex].classList.remove('tab_active');
    contents[newIndex].classList.remove('tab__content_active');
    event.currentTarget.classList.toggle('tab_active');
    newIndex = contents.findIndex((tab) => tab.classList.contains("content_active"));
    contents[newIndex].classList.toggle("tab__content_active");
}
*/