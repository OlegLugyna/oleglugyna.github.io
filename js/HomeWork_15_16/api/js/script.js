(function() {
  'use strict';

  function apiQuery() {
    var container = document.getElementById('root');

    var source = document.getElementById('template').textContent;
    var compiled = _.template(source);
    //var myApi = makeApi();
    var apiUrl = makeApi();
    console.log(apiUrl);
    //var apiUrl = 'https://pixabay.com/api/?key=5722856-55f0750c7fd7b55c44652343b&q=cats+dog&image_type=photo&pretty=true';
    var promice = fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('ERROR while fetching!');
    }).then(function(data) {
      console.log(data);
      var articles = _.map(data.hits, function(item) {
        return {
          img: item.webformatURL,
          author:item.user,
          favorites: item.favorites,
          views:item.views
        };
      });
      //console.log (articles);
      render(compiled, articles, container);
    }).catch(function(error) {
      console.log(error);
    });
    function render(template, data, parent) {
      var htmlString = ' ';

      _.forEach(data, function(item) {
        htmlString += template(item);
      });

      parent.innerHTML = htmlString;
    }
  }

  function makeApi() {
    var input = document.getElementById('myQuery');
    var insert = input.value;
    //console.log (insert);
//var insert = document.getElementById('myQuery').value;
    return encodeURI('https://pixabay.com/api/?key=5722856-55f0750c7fd7b55c44652343b&q=' + insert + '&image_type=photo&pretty=true&per_page=10');
  }

  var btn = document.querySelector('button');

  btn.addEventListener('click', function() {
    apiQuery();
  });

})();
