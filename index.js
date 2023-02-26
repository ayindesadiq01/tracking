'use strict';
const main = document.querySelector('.main')
const closeTab = document.querySelector('.close-tab')
const menuList = document.querySelector('.menu-list')
const hidden = document.querySelector('.hidden')

main.addEventListener('click', function(){
 menuList.classList.remove('hidden');
})