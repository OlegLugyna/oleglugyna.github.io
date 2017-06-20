(function() {
  'use strict';

  var test = {
    data: {
      caption: 'Тест проверки знаний по теме "Шаблоны"',
      questions: [
        {
          title:'Что такое шаблон?',
          answers: ['Любая строка в HTML.', 'Генерируемый HTML код.', 'Тестовая строка, которая содержит специальные параметры.', 'Объект, который передается шаблонизатору.']
          //correctAnswers:[3]
        },
        {
          title: 'Какие символы обозначают начало и конец шаблона?',
          answers: ['<%.....%>', '<.....>', '%.....%', '{%.....%}', '{{.....}}']
          //correctAnswers:[1, 3]
        },
        {
          title: 'Какой из шаблонов воспримет exemple, как JS код',
          answers:['<%+ exemple %>', '<%= exemple %>', '<%- exemple %>', '<% exemple %>']
          //correctAnswers:[4]
        }
      ]
    }
  },

  //strJson = JSON.stringify(test);
  //console.log (strJson);

  //var testBack = JSON.parse(strJson);
  //console.log (testBack);

  root = document.getElementById('root');
  var source = document.getElementById('test__template').textContent, template = _.template(source);
  root.innerHTML += template({data:test.data});





})();
