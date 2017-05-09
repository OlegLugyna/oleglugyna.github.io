// Задача_1

(function () {
  'use strict'

  function exponentiation () {

    if (n!=0) {
      var arr = [];
      for (var i=0; i<n; i++) {
        arr [i]=x;
      }

      var y = arr [0];
      for (var j=1; j<arr.length; j++) {
        y = y*arr[j];
      }

      return y;
    } else {
        return 1;
      }
  }

  var x = prompt ('Введите целое число X - основание степени: ', ' ');
  var n = prompt ('Введите целое число N - показатель степени: ', ' ');
    if (n<0) {
      alert ('Введите число большее нуля!');
    } else {
      console.log (exponentiation(x,n).toLocaleString());
    }


})();


//Задача_2
/*
(function () {

  function succesLogin (nameUser) {
    var arr = new Array(5);
      for (var i=0; i<arr.length; i++) {
        arr [i]= prompt ('Введите имя: ', ' ');
        arr[i] = arr[i].toLowerCase();
      }

      var nameUser = prompt ('Введите имя пользователя: ', ' ');
      nameUser=nameUser.toLowerCase();

    for (var j=0; j<=arr.length; j++) {
      arr [j]==nameUser;
        if (arr[j]===nameUser) {
          alert (nameUser[0].toUpperCase() + nameUser.substring(1).toLowerCase() + ', Вы успешно вошли.');
         return;
       }
    }
    alert ('Вы не верно ввели имя пользователя!');
  }

  succesLogin ();
})();
*/
