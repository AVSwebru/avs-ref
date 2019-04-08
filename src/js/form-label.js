(function(){

  var formInputs = document.querySelectorAll('.js-register-input');

  formInputs.forEach((element) => {
    if (element.value !== '') {
      element.nextElementSibling.classList.add('focused');
    }

    element.addEventListener('focus', () => {
      element.nextElementSibling.classList.add('focused');
    });

    element.addEventListener('blur', () => {
      if (element.value == '') {
        element.nextElementSibling.classList.remove('focused');
      }
    });

  })

})()