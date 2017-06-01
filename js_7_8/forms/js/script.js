'use strict'

  $(function() {
    var $linkFirst = $('input#first_name');
    $linkFirst.on('click', function(event) {
      var $title = $(this).attr('title');
      var $tooltips = $('#tooltips');
      $tooltips.text($title)
                .css ({
                  'top': event.pageY + 5,
                  'left': event.pageX + 5
                })
                .show();
    }).mouseout (function () {
      var $tooltips = $('#tooltips');
      $tooltips.hide()
              .text('')
              .css({
                'top': 0,
                'css': 0
              });
    });
});

  $(function() {
    var $linkSecond = $('input#last_name');
    $linkSecond.on('click', function(event) {
      var $title = $(this).attr('title');
      var $tooltips = $('#tooltips');
      $tooltips.text($title)
                .css ({
                  'top': event.pageY + 5,
                  'left': event.pageX + 5
                })
                .show();
    }).mouseout (function () {
      var $tooltips = $('#tooltips');
      $tooltips.hide()
              .text('')
              .css({
                'top': 0,
                'css': 0
              });
    });
  });

  $(function() {
    var $linkAddress = $('input#address');
    $linkAddress.on('click', function(event) {
      var $title = $(this).attr('title');
      var $tooltips = $('#tooltips');
      $tooltips.text($title)
                .css ({
                  'top': event.pageY + 5,
                  'left': event.pageX + 5
                })
                .show();
    }).mouseout (function () {
      var $tooltips = $('#tooltips');
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
    $linkButton.on ('click', function(event) {
      var $title = $('input#first_name').attr('title');
      var $tooltips = $('#tooltips');
      $tooltips.text($title)
                .css ({
                  'top': event.pageY - 205,
                  'left': event.pageX + 350
                })
                .show();

      var $titleLast = $('input#last_name').attr('title');
            var $tooltipsLast = $('#tooltips');
            $tooltipsLast.text($titleLast)
                      .css ({
                        'top': event.pageY - 150,
                        'left': event.pageX + 350
                      })
                .show();
    });
    // }).mouseout (function () {
    //   var $tooltips = $('#tooltips');
    //   $tooltips.hide()
    //           .text('')
    //           .css({
    //             'top': 0,
    //             'css': 0
    //           });


  });
