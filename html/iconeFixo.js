const menus = document.querySelectorAll('[data-menu]');

menus.forEach(function (e) {
  e.addEventListener('click', function () {
    for (i = 0; i < menus.length; i++){
      menus[i].classList.remove(cssAtivo);
    }
    e.classList.add(cssAtivo);
    })
});

const btnMenu = document.getElementsByClassName('btnMenu')[0];
const menu = getElementsByClassName('menu')[0];
btnMenu.addEventListener('click', function () {
  menu.classList.toggle('menuAberto');
});
