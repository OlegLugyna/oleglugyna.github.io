'use strict'

  var app = {
    reverseString: function  () {
    var str = 'hello';
    var arr = str.split ('');
    var newArr = arr.reverse ( );
    var newStr = newArr.join ('');
    return newStr;
    },

    newReverseString:function  () {
      var str = 'Здравствуйте дорогие друзья';
      var newstr = '';
      var i = str.length;
      while (i>0) {
        newstr =  newstr + str.substring (i-1, i)
        i--
       }
    },

    findLongestworld: function () {
    var str = 'Высокая производительность труда - залог успешного бизнеса!'
    var arr = str.split (' ');
    var word = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > word.length) {
          word = arr[i];
        }
      }
    },

    exponentiation: function () {

      var base = 2;
      var expon = 4;
      var result = base;
      for (var i = 1; i < expon; i++) {
        result = result*base;
      }
    }

  };

  module.exports = app;
