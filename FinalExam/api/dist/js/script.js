//slider
$(function() {
  $('.jcarousel').jcarousel({

  });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
});

//api query & masonry

(function(){
  'use strict';

  var section = document.querySelector('.tile');

  var apiUrl = 'https://pixabay.com/api/?key=5722856-55f0750c7fd7b55c44652343b&q=cats+flowers&image_type=photo&pretty=true&per_page=9';
  apiQuery();
  masonryStart();

  function createApi() {

    var input = section.querySelector('.input__form');
    var dataQuery = input.value;
    //console.log('dataQuery:', dataQuery);
    return encodeURI('https://pixabay.com/api/?key=5722856-55f0750c7fd7b55c44652343b&q=' + dataQuery + '&image_type=photo&pretty=true&per_page=9');
  }

  //console.log (createApi());

  function apiQuery() {
    var container = section.querySelector('#container');
    var source = document.getElementById('template').textContent;
    var compiled = _.template(source);
    apiUrl = createApi();
    //console.log ('apiUrl', apiUrl);
    var apiQuery = fetch(apiUrl);
    apiQuery.then(function (responce) {
      if(responce.ok) {
        return responce.json();
      } else {
        return false;
      }
    }).then (function(data) {
      var photoArr = _.map(data.hits, function(item) {
        return {
          img: item.webformatURL,
          author: item.user
        };
      });
      //console.log('Это PhotoArr:', photoArr);
      render(compiled, photoArr, container);
    }).catch(function(error) {
      console.log (error);
    });

    function render(template, data, parent) {
      var htmlString = ' ';

      _.forEach(data, function(item) {
        htmlString += template(item);
      });

      parent.innerHTML = htmlString;
    }
  }

  var btn = section.querySelector('.input__btn');
  btn.addEventListener('click', function() {
    apiQuery();
    masonryStart();
  });

  function masonryStart() {
    setTimeout(function(){
      var container = document.querySelector('#container');
      var msnry = new Masonry( container, {
      // Настройки
        columnWidth: 400,
        itemSelector: '.container__item',
        columnWidth: '.container__item',
        isFitWidth: true,
        gutter: 20
      });
    }, 500);
  }
})();
