window.onload = function () {
var burger = document.getElementById("burger");
var navbarSupportedContent = document.getElementById("navbarSupportedContent");
var header__container__fluid = document.getElementById("header__container__fluid");
burger.addEventListener("click", () => {
  burger.classList.toggle("body-menu-open");
  navbarSupportedContent.classList.toggle("collapse-show");
  header__container__fluid.classList.toggle("flex-col");
})


  var inputsArray = document.querySelectorAll(".input");
  var buttonsArray = document.querySelectorAll(".button");
  for (var i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener("click", validation);
  }
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  function validation(e) {
    if (e.target == buttonsArray[0]) {
        inputsArray[0].value
        ? alert("Запрос" + " " + inputsArray[0].value + " " + "успешно отправлен")
        : alert("Ошибка, поле ввода пустое, введите текст для поиска");
    } else
    if (e.target == buttonsArray[1]) {
        
          // send form
          function sendForm() {
            alert("Адрес" + " " + inputsArray[1].value + " " + "успешно отправлен").fadeIn();
          }
            var email = inputsArray[1].value
            if (validateEmail(email)) {
              sendForm();
            } else {
              alert(email + " is not valid");
            }
    } else
    if (e.target == buttonsArray[2]) {
        function sendForm() {
            alert("Адрес" + " " + inputsArray[2].value + " " + "успешно отправлен").fadeIn();
          }
            var email = inputsArray[2].value
            if (validateEmail(email)) {
              sendForm();
            } else {
              alert(email + " is not valid");
            }
    } else
    if (e.target == buttonsArray[3]) {
        function sendForm() {
            alert("Адрес" + " " + inputsArray[3].value + " " + "успешно отправлен").fadeIn();
          }
            var email = inputsArray[3].value
            if (validateEmail(email)) {
              sendForm();
            } else {
              alert(email + " is not valid");
            }
    }
    
  }
};
