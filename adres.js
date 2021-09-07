let burger = document.querySelector('.content__burger');
let menu = document.querySelector('.content__menu');

burger.onclick = function reade() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
};