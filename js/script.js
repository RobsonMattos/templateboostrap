$(document).ready(function () {
    //sticky
    // $('.js--section-produtos').waypoint(function (direction) {
    //     if (direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // }, {
    //         offset: '60px;'
    //     });


    // Rolagem mais suave do scroll 
    $('.js-home').click(function () {
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 1000);
    });

    $('.js-home').click(function () {
        $('html, body').animate({ scrollTop: $('.js--home').offset().top }, 1000);
    });

    $('.js-primary').click(function () {
        $('html, body').animate({ scrollTop: $('.js--primary').offset().top }, 1000);
    });

    $('.js-second').click(function () {
        $('html, body').animate({ scrollTop: $('.js--second').offset().top }, 1000);
    });
});