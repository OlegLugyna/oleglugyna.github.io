'use strict'

  $(function() {
    var $linkInput = $('input.input-field');
    $linkInput.on('focus', showOneTooltip);
    function showOneTooltip() {
      $(this).parent()
              .find('.tooltip')
              .addClass('visible');
    }

    $linkInput.on('blur',hideTooltip);
    function hideTooltip() {
      $(this).parent()
              .find('.tooltip')
              .removeClass('visible');
    }

    var $linkButton = $('button');
    $linkButton.on('click',showAllTooltips);
    function showAllTooltips() {
      var $tooltip = $('.tooltip');
      $tooltip.addClass('visible');

      setTimeout(hideAllTooltips, 2000);
    }

    function hideAllTooltips() {
      $('.tooltip').removeClass('visible');

  }
});
