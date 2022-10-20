const menu = document.querySelector('.menu-bars');
const desktopNav = document.querySelector('.desktop-nav');
const navLink = document.querySelectorAll('.nav-link')

menu.addEventListener('click', () => {
  desktopNav.classList.toggle('activated')
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    desktopNav.classList.remove('activated')
  });
});
