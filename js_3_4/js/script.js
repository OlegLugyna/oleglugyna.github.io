(function() {
  'use strict'

    var test = {
      data: {
        title: 'Тест по программированию',
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
      },
      createDocument: function() {
        var  containerTitel = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.data.title));
        containerTitel.appendChild(h1);

        var container = document.createElement('div');
        container.classList.add('block');

          for (var i = 0, length=this.data.questions.length; i < length; i++) {
            var header = document.createElement('h2');
            header.classList.add('question');
            header.appendChild(document.createTextNode(this.data.questions[i].title));
            container.appendChild(header);

            var form = document.createElement('form');
            var ul = document.createElement('ul');
            ul.classList.add('block__list');

            for (var j = 0, length1=this.data.questions[i].answers.length; j<length1; j++) {
              var li = document.createElement('li');
              var label = document.createElement('label');
              li.appendChild(label);

              var input = document.createElement('input');
              input. classList.add('answer');
              input.setAttribute('type', 'checkbox');
              label.appendChild(input);

              var span = document.createElement('span');
              span.appendChild(document.createTextNode(test.data.questions[i].answers[j]));
              label.appendChild(span);

              var br = document.createElement('br');
              label.appendChild(br);

              ul.appendChild(li);
            }

            form.appendChild(ul);
            container.appendChild(form);
          }

          var button = document.createElement('button');
          button.innerHTML='Проверить мои результаты';
          button.className='button';
          button.setAttribute('type', 'submit');
          button.setAttribute('formaction', '#');

          var root = document.querySelector('#root');
          root.appendChild(containerTitel);
          root.appendChild(container);
          root.appendChild(button);
      }
    };

test.createDocument();
})();
