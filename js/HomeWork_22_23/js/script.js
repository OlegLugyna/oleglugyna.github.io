(function() {
  'use strict';

    const test = {
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

    const strJson = JSON.stringify(test);
    //console.log (strJson);

    const testBack = JSON.parse(strJson);
    //console.log (testBack);

    //const root = document.getElementById('root');
    let source = document.getElementById('test__template').textContent,
    template = _.template(source);
    root.innerHTML += template({data:testBack.data});
  }

  const root = document.getElementById('root');
  let arrCheckboxes = root.getElementsByTagName('input');

  function useButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Проверить результаты';
    button.ClassName = 'button';
    button.setAttribute('type', 'submit');
    button.setAttribute('formaction', '#');
    root.appendChild(button);
    button.addEventListener('click',() => {
      const result = _.isEqual(getAnswers(arrCheckboxes), getCorrectAnswers(test.data.questions));

      if (result === true) {
        goodTest();
      } else {
        badTest();
      }
    });
  }

  function resetButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Пройти тест еще раз';
    button.ClassName = 'button';
    button.setAttribute('type', 'reset');
    button.setAttribute('formaction', '#');
    root.appendChild(button);
    button. addEventListener('click',() => {
      const form = root.getElementsByTagName('form');
      _.forEach(form, function (item) {
        item.reset();
      });
    });
  }

  function getAnswers(arr) {
    const answers = _.map(arr,(item) => {return item.checked;});

     return answers;
  }

  function getBoolArray(answersArr, correctAnswerArr) {
    return _.map(answersArr, (n,i) => {return _.includes(correctAnswerArr, i+1);});
  }

  function getCorrectAnswers(quetionsArray) {
    return _.flatMap(quetionsArray, (item) => {return getBoolArray(item.answers, item.correctAnswers);
    });
  }

   function goodTest () {
    let modal = document.getElementById('testGood');
    let close1 = document.getElementById('closeGood');
    modal.style.display = 'block';
    close1.addEventListener('click',() => {
      modal.style.display = 'none';
    });

    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
    };
}

  function badTest() {
    let modal = document.getElementById('testBad');
    let close1 = document.getElementById('closeBad');
    modal.style.display = 'block';
    close1.addEventListener('click',() => {
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
    }

  unit();

})();
