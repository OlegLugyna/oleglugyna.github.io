
(function () {
  'use strict'
  
  $(function() {

    var $link = $('ul.tabs');
    $link.each(function() {
      $(this).find('li').each(function(i) {
        $(this).click(function(){
          $(this).addClass('active').siblings().removeClass('active')   .closest('div.container').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
        });
      });
    });

  })
  //})(jQuery)
})();
