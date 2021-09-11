let burger = document.querySelector('.content__burger');
let menu = document.querySelector('.content__menu');
let loke = document.querySelector('body')

burger.onclick = function reade() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    //loke.classList.toggle('loke');
};

loke.onscroll = function back() {
    menu.classList.remove('active');
    burger.classList.remove('active');
}