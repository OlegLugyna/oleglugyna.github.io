(function() {
  'use strict'

  var start = Date.now();
  var timerIndicator = 0;

  var colon = document.querySelectorAll('.colon');
  colon[0].innerHTML=':';
  colon[1].innerHTML=':';

  function updateTime() {
      var root = document.getElementById('root');
      var milliSeconds = document.querySelector('.milli_seconds');
      var timeOut = Date.now();
      timerIndicator = (timeOut - start);
      //root.className='time_elem';
      var timeMilliSeconds = new Date(timerIndicator).getMilliseconds();
      milliSeconds.innerHTML=timeMilliSeconds;

      var hours = document.querySelector('.hours');
      var timeHour = new Date(timerIndicator).getHours()-2;

        if(timeHour<10) {
            hours.innerHTML = '0'+timeHour;
        } else {
          hours.innerHTML =  timeHour;
        }



      var minutes = document.querySelector('.minutes');
      var timeMin = new Date (timerIndicator).getMinutes();

        if (timeMin<10) {
          minutes.innerHTML = '0'+timeMin;
        } else {
          minutes.innerHTML = timeMin;
        }

      var seconds = document.querySelector('.seconds');
      var timeSec = new Date(timerIndicator).getSeconds();

        if (timeSec<10) {
          seconds.innerHTML = '0'+timeSec;
        } else {
          seconds.innerHTML = timeSec;
        }
  }

  var end;
  function startTimer() {
  end = setInterval(updateTime, 5);
  }

  function stopTimer() {
    clearInterval(end);
  }

  var buttonStart = document.querySelector('.button__start');
  var button1 = document.createElement('button');
  button1.innerHTML='START';
  button1.className='button';
  button1.setAttribute('id', 'button__start');
  button1.setAttribute('type', 'submit');
  button1.setAttribute('formaction', '#');
  buttonStart.appendChild(button1);
  buttonStart.addEventListener('click', startTimer);

  var buttonClear = document.querySelector('.button__clear');
  var button = document.createElement('button');
  button.innerHTML='CLEAR';
  button.className='button';
  button.setAttribute('id', 'button__clear');
  button.setAttribute('type', 'submit');
  button.setAttribute('formaction', '#');
  buttonClear.appendChild(button);
  buttonClear.addEventListener('click', stopTimer);

})();



// (function() {
//   'use strict'
//
//   function startTime() {
//   var root = document.getElementById('root');
//     var startElem = document.createElement('div');
//     startElem.className='start_elem';
//     startElem.innerHTML = Date.now();
//     root.appendChild(startElem);
//     return Date.now();
//   }
//
//   var start = startTime();
//   //console.log (start);
//
//
//   function updateTime() {
//       var root = document.getElementById('root');
//       // var timeElem = document.createElement ('div');
//       // timeElem.className='time_elem';
//       // timeElem.innerHTML = Date.now();
//       // root.appendChild(timeElem);
//       //return Date.now();
//       var timeOut = Date.now();
//       var timerIndicator = (timeOut - start);
//       //var timeElem = document.createElement ('div');
//       root.className='time_elem';
//       root.innerHTML = timerIndicator;
//       //root.appendChild(timeElem);
//
//       //console.log (timerIndicator);
//   }
//
//
//     //var end = setInterval(updateTime, 500);
//
//
//
//
//
//     function buttonStart () {
//     var button = document.createElement('button');
//     button.innerHTML='START';
//     button.className='button';
//     button.setAttribute('type', 'submit');
//     button.setAttribute('formaction', '#');
//     root.appendChild(button);
//
//
//   }
//
//   //buttonStart();
//
//
//
//
//
// })();
