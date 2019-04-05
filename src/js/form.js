(function(){

var registerInputs = document.querySelectorAll('.js-register-field');

registerInputs.querySelector.addEventListeneer('click', (event) => {
  event.target.querySelector('.js-register-label').classList.toggle('focused');
})

})()