// Задача_1

(function ()  {
  'use strict'

  function exponentiation (base, expon) {

    if (expon!==0) {

      var result = base;

      for (var i = 1; i < expon; i++) {
        result = result*base;
      }

      return result;

    } else {
      return 1;
    }
  }

  function getInput (massege) {

    var number = +prompt(massege, '');

    if (window.isNaN(number)) {
      window.alert('Введите числовое значение!');

      return getInput(massege);

    } else {
      return number;
    }
  }

  function finalCalculation () {

    var baseInput = getInput('Введите цeлое число Х - основание степени', '');

    var exponInput = getInput('Введите целое число N - показатель (экспоненту) степени', '');

      if (exponInput < 0) {
        return console.log (1/exponentiation (baseInput, exponInput*-1));

      } else {
        return console.log (exponentiation (baseInput, exponInput));
      }
  }

  finalCalculation();
})();

confirm ('Вторая задача?');


//Задача_2

(function () {
  'use strict'

  function succesLogin (nameUser) {
    var arr = new Array(5);
    var  dataNames;

      for (var i = 0; i < arr.length; i++) {
        arr[i] = prompt ('Введите имя: ', ' ');
        arr[i] = arr[i].toLowerCase();

          if ( (arr[i] === ' ') || (arr[i] === null) ) {

            alert ('Неправильный формат ввода имени!');
            dataNames = false;
            break;

          } else {

            dataNames = true;

          }
      }

      if (dataNames) {
        nameUser = prompt ('Введите имя пользователя: ', ' ');
        nameUser = nameUser.toLowerCase();

        if ( (nameUser === ' ') || (nameUser === null) ) {
          alert ('Неправильный формат ввода имени пользователя!');

        } else {

          for (var j = 0; j <= arr.length; j++) {
            arr[j] === nameUser;

              if (arr[j] === nameUser) {
                alert (nameUser[0].toUpperCase() + nameUser.substring(1).toLowerCase() + ', Вы успешно вошли.');
                return;
              }
          }

          alert ('Вы не верно ввели имя пользователя!');
        }
      }
  }

  succesLogin ();
})();
