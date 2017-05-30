(function() {
  'use strict'
  // дом-узлы первого таймера
  var $play1 = document.querySelector('#play');
  var $stop1 = document.querySelector('#stop');
  var $reset1 = document.querySelector('#reset');
  var $time1 = document.querySelector('#time');

  // дом-узлы второго таймера
  var $play2 = document.querySelector('#play2');
  var $stop2 = document.querySelector('#stop2');
  var $reset2 = document.querySelector('#reset2');
  var $time2 = document.querySelector('#time2');

  // создаем первый таймер
  var timer1 = createTimer(function (time) {
    var timeString = formatTimer(time);
    $time1.innerHTML = timeString;
  });

  $play1.addEventListener('click', timer1.startPause);
  $stop1.addEventListener('click', timer1.stop);
  $reset1.addEventListener('click', timer1.reset);

  // создаем второй таймер
  var timer2 = createTimer(function (time) {
    var timeString = formatTimer(time);
    $time2.innerHTML = timeString;
  });

  $play2.addEventListener('click', timer2.startPause);
  $stop2.addEventListener('click', timer2.stop);
  $reset2.addEventListener('click', timer2.reset);

  //форматируем таймер в формат часы-м
  function formatTimer (savedTime) {
    var timeHour = new Date(savedTime).getHours()-2;
      if(timeHour<10) {
          timeHour = '0'+timeHour;
      } else {
        timeHour =  timeHour;
      }

    var timeMin = new Date (savedTime).getMinutes();
      if (timeMin<10) {
        timeMin = '0'+timeMin;

      } else {
        timeMin = timeMin;
      }

    var timeSec = new Date(savedTime).getSeconds();
      if (timeSec<10) {
        timeSec = '0'+timeSec;

      } else {
        timeSec = timeSec;
      }

    var timeMilliSeconds = new Date(savedTime).getMilliseconds();
      if (timeMilliSeconds<10) {
        timeMilliSeconds = '00'+timeMilliSeconds;

      } else if (timeMilliSeconds<100) {
        timeMilliSeconds = '0'+timeMilliSeconds;

      } else {
        timeMilliSeconds = timeMilliSeconds;
      }

    var totalTime = timeHour + ':' + timeMin + ':' + timeSec + ':' + timeMilliSeconds;
    console.log (totalTime);
    return totalTime;
  }

  function createTimer (onTimeChange) {
    var prevTime;
    var intervalId;
    var savedTime = 0;
    var isCounting = false;

    return {
      startPause: startPause,
      reset: reset,
      stop: stop
    };

    function startPause () {
      if (isCounting) {
        pause();

      } else {
        start();
      }
    }
    function start() {
      prevTime = Date.now();
      intervalId = window.setInterval(tick, 5);
      isCounting = true;
    }
    function tick() {
      savedTime += Date.now() - prevTime;
      prevTime = Date.now();
      onTimeChange(savedTime);
      formatTimer(savedTime);
    }
    function reset() {
      savedTime = 0;
      onTimeChange(0);
    }
    function pause() {
      clearInterval(intervalId);
      isCounting = false;
    }
    function stop() {
      pause();
      reset();
    }

  }
})();
