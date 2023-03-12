'use strict';
const main = document.querySelector('.main')
const closeTab = document.querySelector('.close-tab')
const menuList = document.querySelector('.menu-list')
const hidden = document.querySelector('.hidden')
const overlay = document.querySelector('.blur')

main.addEventListener('click', function(){
 menuList.classList.remove('hidden');
 overlay.classList.remove('hidden');
});
closeTab.addEventListener('click', function(){
   menuList.classList.add('hidden');
   overlay.classList.add('hidden');
});
overlay.addEventListener('click', function(){
   menuList.classList.add('hidden');
   overlay.classList.add('hidden');
})