(function() {
  'use strict'

  function programmingTest (){
    var test = {
      data: {
        titele: 'Тест по программированию',
        questions: [
          {
            title: 'Вопрос №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
          },
          {
            title: 'Вопрос №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5']
          },
          {
            title: 'Вопрос №3',
            answers:['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
          }
        ]
      }
    };

    function creatTitele () {
      var root = document.getElementById('root');
      var h1 = document.createElement('h1');
      h1.appendChild(document.createTextNode(test.data.titele));
      root.appendChild(h1);
  }

    function creatQustionaire() {

      for (var key in test.data.questions) {
        var questionsTitle = document.createElement('p');
        questionsTitle.className='question';
        questionsTitle.appendChild(document.createTextNode(test.data.questions[key].title));
        root.appendChild(questionsTitle);

          for (var i = 0, length=test.data.questions[key].answers.length; i < length; i++) {
            var label = document.createElement('label');
            root.appendChild(label);

            var elInput = document.createElement('input');
            questionsTitle.className='answer';
            elInput.setAttribute('type', 'checkbox');
            label.appendChild(elInput);

            var span = document.createElement('span');
            span.appendChild(document.createTextNode(test.data.questions[key].answers[i]));
            label.appendChild(span);

            var br = document.createElement('br');
            label.appendChild(br);
          }
      }
    }

    function creatButton () {
      var root = document.getElementById('root');
      var button = document.createElement('button');
      button.innerHTML="Проверить мои результаты";
      button.className='button';
      button.setAttribute('type', 'submit');
      button.setAttribute('formaction', '#')
      root.appendChild(button);
    }

    creatTitele();
    creatQustionaire();
    creatButton();

  }

  programmingTest ();
  //console.log (root);

})();
