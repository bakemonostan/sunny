const menu = document.querySelector('.menu img');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', dropDown);

function dropDown() {
  navMenu.classList.toggle('display');
}
