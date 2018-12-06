$(document).ready(function () {
    var height = $(window).width();
    var navHeight = $('.nav').height();

    $('body').css({'with': height});

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});