(function() {
  'use strict';

  function template () {
    var test = {
      data: {
        caption: 'Тест проверки знаний по теме "Шаблоны"',
        questions: [
          {
            title:'Что такое шаблон?',
            answers: ['Любая строка в HTML.', 'Генерируемый HTML код.', 'Тестовая строка, которая содержит специальные параметры.', 'Объект, который передается шаблонизатору.'],
            correctAnswers:[2]
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
    },

    strJson = JSON.stringify(test);
    console.log (strJson);

    var testBack = JSON.parse(strJson);
    console.log (testBack);

    var root = document.getElementById('root');
    var source = document.getElementById('test__template').textContent, template = _.template(source);
    root.innerHTML += template({data:testBack.data});
  }

var root = document.getElementById('root');
  var arrCheckboxes = root.querySelectorAll('input[type="checkbox"]'),
  output = document.getElementById('result');

  function button() {
    var root = document.getElementById('root');
    var button = document.createElement('button');
    button.innerHTML = 'Проверить результаты';
    button.ClassName = 'button';
    button.setAttribute('type', 'submit');
    //button.setAttribute('formaction', '#');
    root.appendChild(button);
    button.addEventListener('clic', function() {
      output.textContent = getAnswers(arrCheckboxes);
//console.log(getAnswers(arrCheckboxes));

    })

  }

  function getAnswers(arr) {
    return _.map(arr, function(item) {
      return item.checked;
    })

  }

console.log(getAnswers(arrCheckboxes));




  function unit() {
    template();
    button();
  }

  unit();

})();
