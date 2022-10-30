const iconMenu = document.querySelector('#bars');
const menu = document.querySelector('.menu');


iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("active")
    menu.classList.toggle("menu-show");
});

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        iconMenu.classList.remove("active")
        menu.classList.remove("menu-show");
    })
})