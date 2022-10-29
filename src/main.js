const iconMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-show");
})