'use strict'

  $(function() {
    var $linkInput = $('input.input-field');
    $linkInput.click(function(event) {
      var $title = $(this).attr('title');
      var $wrapperForm = $('.wrapper-form');
      $wrapperForm.css({'position':'static'});
      var $tooltip = $('.tooltip');
      $tooltip.text($title)
                .css ({
                  'top': event.pageY + 5,
                  'left': event.pageX + 10,
                })
                .show();
    })
    $linkInput.mouseout (function () {
      var $tooltips = $('.tooltip');
      $tooltips.hide()
              .css({
                'display':'none',
                'top': 0,
                'left': 0
              });
            var $wrapperForm = $('.wrapper-form');
            $wrapperForm.css({'position':'relative'});
    });

    var $linkButton = $('button');
    $linkButton.on('click',showAllTooltips);

    function showAllTooltips() {
      var $tooltip = $('.tooltip');
      $tooltip.addClass('visible').css ({
          'display':'block',
          'top': '50%',
          'left': '73%'
      });
      setTimeout(hideAllTooltips, 2000);
    }

    function hideAllTooltips() {
      $('.tooltip').removeClass('_visible').css ({
        "display":'none'
      });
    }

});
