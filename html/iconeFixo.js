const menu = document.querySelectorAll('[data-menu]');

menu.forEach(function (e) {
  e.addEventListener('click', function () {
    for (i = 0; i < menu.length; i++){
      menu[i].classList.remove(cssAtivo);
    }
    e.classList.add(cssAtivo);
    })
});