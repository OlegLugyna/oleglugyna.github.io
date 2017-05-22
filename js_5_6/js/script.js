(function() {
  'use strict'

  var start = Date.now();


  function updateTime() {
      var root = document.getElementById('root');
      var timeOut = Date.now();
      var timerIndicator = (timeOut - start);
      root.className='time_elem';
      root.innerHTML = timerIndicator;
      //clearInterval(end);
  }


    var end = setInterval(updateTime, 5);
    //clearInterval(end);


  //function buttonStart () {
  var forButton = document.getElementById('for-button');
     var button = document.createElement('button');
     button.innerHTML='START';
     button.className='button';
     button.setAttribute('type', 'submit');
     button.setAttribute('formaction', '#');
     forButton.appendChild(button);


   //}

   //buttonStart();




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
