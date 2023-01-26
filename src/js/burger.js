const menuBurger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu__list');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__list-link');

menuBurger.addEventListener('click', () => menuBurger.classList.toggle('open'));
menuBurger.addEventListener('click', () => menuList.classList.toggle('open'));
menuBurger.addEventListener('click', () => document.body.classList.toggle('lock'));

menuLinks.forEach((el) => el.addEventListener('click', closeMenu));
menuList.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('menu__list-link')) {
        menuBurger.classList.remove('open');
        menuList.classList.remove('open');
        document.body.classList.remove('lock');
    }

};