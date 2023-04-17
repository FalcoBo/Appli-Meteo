const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu_burger');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.style.display = "block";
});