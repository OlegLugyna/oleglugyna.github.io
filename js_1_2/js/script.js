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

  var baseInput = getInput('Введите цeлое число Х - основание степени', '');
  var exponInput = getInput('Введите целое число N - показатель (экспоненту) степени', '');

  function finalCalculation () {

      if (exponInput < 0) {
        return console.log (1/exponentiation (baseInput, exponInput*-1));

      } else {
        return console.log (exponentiation (baseInput, exponInput));
      }
  }

  finalCalculation(baseInput, exponInput);
})();

confirm ('Вторая задача?');
  
//Задача_2

(function () {
  'use strict'

  function succesLogin (nameUser) {
    var arr = new Array(5);

      for (var i = 0; i < arr.length; i++) {
        arr[i] = getInput ('Введите имя: ', ' ');
        arr[i] = arr[i].toLowerCase();
      }

      function getInput (massege) {
        var number = prompt(massege, '');

        if ( window.isNaN(number)) {
          return number;

        } else {
          window.alert('Неправильный формат ввода имени!');
          return getInput(massege);
        }
      }

        nameUser = getInput ('Введите имя пользователя: ', ' ');
        nameUser = nameUser.toLowerCase();

        for (var j = 0; j <= arr.length; j++) {
          arr[j] === nameUser;

            if (arr[j] === nameUser) {
              alert (nameUser[0].toUpperCase() + nameUser.substring(1).toLowerCase() + ', Вы успешно вошли.');
              return;
            }
        }
        alert ('Вы не верно ввели имя пользователя!');
  }

  succesLogin ();
})();
