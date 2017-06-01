'use strict'

  $(function() {
    var $linkFirst = $('input.input-field');
    $linkFirst.click(function(event) {
      var $title = $(this).attr('title');
      var $tooltips = $('.tooltip');
      $tooltips.text($title)
                .css ({
                  'display':'block',
                  'top': event.pageY + 5,
                  'left': event.pageX + 5
                })
                .show();
    }).mouseout (function () {
      var $tooltips = $('.tooltip');
      $tooltips.hide()
              .text('')
              .css({
                'top': 0,
                'css': 0
              });
    });
});

$(function() {
  var $linkButton = $('button');
  $linkButton.on ('click', function() {
    var $title = $('.input-field').attr('title');
    var $tooltips = $('span.tooltip');
    $tooltips.each(function(event) {
      $(this).text($title)
                .css ({
                  'display':'block',
                  'top': event.pageY - 5,
                  'left': event.pageX + 5
                });
    })
            .show();
      }).mouseout (function () {
        var $tooltips = $('.tooltip');
        $tooltips.hide()
                .text('')
                .css({
                  'top': 0,
                  'css': 0
                });

          });
  });
