const menu = document.querySelector('.header-menu');
const showMenu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active'); 
  showMenu.classList.toggle('active');
});