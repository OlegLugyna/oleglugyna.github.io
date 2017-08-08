(function() {
  'use strict';

  var question = document.getElementById('question'),
  answers = document.getElementById('answers'),
  ansCorrect = document.getElementById('answersNum');

  function TestConstructor (question, answers, ansCorrect) {
    this.question = question;
    this.answers = answers;
    this.ansCorrect = ansCorrect;
  }

  var getArray = [];
  localStorage.setItem('storageElement', '[]');
  console.log ('storageElement', localStorage);

  function pushStorage (data){
    getArray.push(data);
    localStorage.setItem('storageElement',JSON.stringify(data));
    getArray= JSON.parse(localStorage.getItem('storageElement'));
  }

  console.log('Это объект TEST', getArray);

  var data = void 0;
  var btnCreate = document.getElementById('btnCreate');
  btnCreate.addEventListener('click', function() {
    var questionArr = question.value,
    answersArr = answers.value,
    newAnswersArr = answersArr.split(','),
    ansCorrectArr = ansCorrect.value;

    data = new TestConstructor (questionArr, newAnswersArr, ansCorrectArr);

    pushStorage(data);
    makeTemplate(getArray);
    getArray = [];
  });

    var btnClear = document.getElementById('btnClear');
      btnClear.addEventListener('click', function() {
      localStorage.clear();
      localStorage.setItem('storageElement', '[]');
      var form = document.getElementsByTagName('form');
      _.forEach(form, function (item) {
        item.reset();
      });
    });

  function makeTemplate(dataTest) {
    var container = document.getElementById('container'),
    source = document.getElementById('template').textContent,
    template = _.template(source);
    container.innerHTML += template(dataTest);
  }

})();
