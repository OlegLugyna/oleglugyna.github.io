var app = require('../js/app.js');

describe('app', function() {
  it("test reverseString function", function() {
    //prepare
    var str = 'hello';

    //act
    var arr = str.split ('');
    var newArr = arr.reverse ( );
    var newStr = newArr.join ('');

    //assert
        expect(newStr).toEqual('olleh');
  });

  it("test newReverseString function", function() {
    //prepare
    var str = 'Здравствуйте дорогие друзья';
    str = str.toLowerCase();
    var newStr = '';
    var i = str.length;

    //act
    while (i>0) {
      newStr =  newStr + str.substring (i-1, i)
      i--
     }

    //assert
        expect(newStr).toEqual('яьзурд еигород етйувтсвардз');
  });

  it("test  findLongestworld function", function() {
    //prepare
    var str = 'Высокая производительность труда - залог успешного бизнеса!'
    var arr = str.split (' ');
    var word = arr[0];

    //act
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length > word.length) {
        word = arr[i];
      }
    }

    //assert
        expect(word).toEqual('производительность');
  });

  it("test exponentiation function", function() {
    //prepare
    var base = 2;
    var expon = 4;
    var result = base;

    //act
    for (var i = 1; i < expon; i++) {
      result = result*base;
    }

    //assert
        expect(result).toEqual(16);
  });


});
