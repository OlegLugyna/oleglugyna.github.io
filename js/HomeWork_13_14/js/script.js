(function() {
  'use strict';

    var test = {
      data: {
        caption: 'Тест проверки знаний по теме "Шаблоны"',
        questions: [
          {
            title:'Что такое шаблон?',
            answers: ['Любая строка в HTML.', 'Генерируемый HTML код.', 'Тестовая строка, которая содержит специальные параметры.', 'Объект, который передается шаблонизатору.'],
            correctAnswers:[3]
          },
          {
            title: 'Какие символы обозначают начало и конец шаблона?',
            answers: ['<%.....%>', '<.....>', '%.....%', '{%.....%}', '{{.....}}'],
            correctAnswers:[1, 5]
          },
          {
            title: 'Какой из шаблонов воспримет exemple, как JS код',
            answers:['<%+ exemple %>', '<%= exemple %>', '<%- exemple %>', '<% exemple %>'],
            correctAnswers:[4]
          }
        ]
      }
    };

  function template () {

    var strJson = JSON.stringify(test);
    //console.log (strJson);

    var testBack = JSON.parse(strJson);
    //console.log (testBack);

    var root = document.getElementById('root');
    var source = document.getElementById('test__template').textContent,
    template = _.template(source);
    root.innerHTML += template({data:testBack.data});
  }

  var root = document.getElementById('root');
  var arrCheckboxes = root.getElementsByTagName('input');
  //var output = document.getElementById('result');

  function useButton() {
    var root = document.getElementById('root');
    var button = document.createElement('button');
    button.innerHTML = 'Проверить результаты';
    button.ClassName = 'button';
    button.setAttribute('type', 'submit');
    button.setAttribute('formaction', '#');
    root.appendChild(button);
    button.addEventListener('click', function() {
      //output.textContent = getAnswers(arrCheckboxes);
      var result = _.isEqual(getAnswers(arrCheckboxes), getCorrectAnswers(test.data.questions));

      if (result === true) {
        goodTest();
      } else {
        badTest();
      }
    });
  }

  function resetButton() {
    var root = document.getElementById('root');
    var button = document.createElement('button');
    button.innerHTML = 'Пройти тест еще раз';
    button.ClassName = 'button';
    button.setAttribute('type', 'reset');
    button.setAttribute('formaction', '#');
    root.appendChild(button);
    button. addEventListener('click', function() {
      var root = document.getElementById('root');
      var form = root.getElementsByTagName('form');
      _.forEach(form, function (item) {
        item.reset();
      });
    });
  }

  function getAnswers(arr) {
    var answers = _.map(arr, function(item) {
      return item.checked;
    });
    return answers;
  }

  function getBoolArray(answersArr, correctAnswerArr) {
    return _.map(answersArr, function (n,i) {
      return _.includes(correctAnswerArr, i+1);
    });
  }

  function getCorrectAnswers(quetionsArray) {
    return _.flatMap(quetionsArray, function(item) {
      return getBoolArray(item.answers, item.correctAnswers);
    });
  }

  function goodTest() {
    var modal = document.getElementById('testGood');
    var close1 = document.getElementById('closeGood');
    modal.style.display = 'block';
    close1.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
    };
}

  function badTest() {
    var modal = document.getElementById('testBad');
    var close1 = document.getElementById('closeBad');
    modal.style.display = 'block';
    close1.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
    };
}





  function unit() {
    template();
    useButton();
    resetButton();
    // goodTest();
    }

  unit();

})();
