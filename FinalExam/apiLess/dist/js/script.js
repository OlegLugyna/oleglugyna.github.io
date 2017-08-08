$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});


//Masonry
(function() {
    var container = document.querySelector('#container');
    var msnry = new Masonry( container, {
        // Настройки
        columnWidth: 300,
        columnWidth: '.container__item',
        itemSelector: '.container__item',
        isFitWidth: true,
        gutter: 20
});
})();