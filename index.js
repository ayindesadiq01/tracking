'use strict';
const main = document.querySelector('.main')
const closeTab = document.querySelector('.close-tab')
const menuList = document.querySelector('.menu-list')
const hidden = document.querySelector('.hidden')

main.addEventListener('click', function(){
 hidden.style.display = 'block';
 if ( hidden.style.display = 'block') {
  main.classList.add('hidden')
 }
});
closeTab.addEventListener('click', function(){
  hidden.style.display = 'none';
 if ( hidden.style.display = 'none') {
  main.classList.remove('hidden')
 }
});