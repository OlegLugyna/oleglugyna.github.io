'use strict'

  $(function() {
    var $linkInput = $('input.input-field');
    $linkInput.click(function(event) {
      var $title = $(this).attr('title');
      // var $wrapperForm = $('.wrapper-form');
      // $wrapperForm.css({'position':'static'});
      var $tooltips = $('#tooltips-div');
      $tooltips.text($title)
                .css ({

                  'top': event.pageY + 5,
                  'left': event.pageX + 10,
                })
                .show();
    });
    $linkInput.mouseout (function () {
      var $tooltips = $('#tooltips-div');
      $tooltips.hide()
              // .text('')
              .css({
                // 'display':'none',
                'top': 0,
                'left': 0
              });

    // var $wrapperForm = $('.wrapper-form');
    // $wrapperForm.css({'position':'relative'});
    });

    var $linkButton = $('button');
    $linkButton.on('click',showAllTooltips);
    var $title = parent().find('.input-field').attr('title');

    function showAllTooltips() {

      var $tooltip = $('.tooltip');
      $tooltip.text($title).addClass('visible').
      css ({
          'display':'block',
          'top': '50%',
          'left': '73%',
      });
      setTimeout(hideAllTooltips, 2000);
    }

    function hideAllTooltips() {
      $('.tooltip').removeClass('visible')
                    .css ({'display':'none'});
    }

});
