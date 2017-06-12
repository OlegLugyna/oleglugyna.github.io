$(document).ready(function() {

    $( '.dropdown' )
        .hover(function() {
                $(this).children('.sub-menu').slideDown(800);
            },

            function(){
                $(this).children('.sub-menu').slideUp(600);
            }
        );
});
