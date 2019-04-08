(function(){

  var btnMenu = document.querySelector('.js-btn-menu');
  var menu = document.querySelector('.js-menu');

  if (window.matchMedia("(min-width: 640px)").matches) {
    menu.hidden = false;
  } else {
    menu.hidden = true;
  }

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('opened');
    btnMenu.classList.toggle('opened');
  })

})()