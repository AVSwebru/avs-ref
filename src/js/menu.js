(function(){

  var btnMenu = document.querySelector('.js-btn-menu');
  var menu = document.querySelector('.js-menu');

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('opened');
    btnMenu.classList.toggle('opened');
  })

})()