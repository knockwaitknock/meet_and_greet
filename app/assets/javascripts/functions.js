$(function() {
    var minImageHeight = 700,
        windowHeight = $(window).height(),
        imageHeight;


    // Image height
    $(window).on("load resize", function(){
        windowHeight = $(window).height();
        if(windowHeight + 50 < minImageHeight)
            imageHeight = minImageHeight;
        else
            imageHeight = windowHeight + 50;
        $(".page").css('height', imageHeight + "px");
    });

    // Fixed menu
    $(window).scroll(function () {
        var menuHeight = $(".menu").height(),
            countHeader = ($(window).scrollTop() + menuHeight / 2) / imageHeight | 0,
            countFooter = ($(window).scrollTop() + windowHeight - (30 + 25)) / imageHeight | 0;

        $("header").css('top', $(window).scrollTop() + "px");

        if(countHeader & 1)
            $("header").removeClass( "color-light" ).addClass( "color-dark" );
        else
            $("header").removeClass( "color-dark" ).addClass( "color-light" );
        if(countFooter & 1)
            $("footer").removeClass( "color-light" ).addClass( "color-dark" );
        else
            $("footer").removeClass( "color-dark" ).addClass( "color-light" );
    });

    // Fixed big logo
    $(window).on("load scroll", function () {
        var bigLogoHeight = $(".img-wrapper").height(),
            top = (imageHeight - bigLogoHeight + $(window).scrollTop()) / 2;
        $(".img-wrapper").css('top', top + "px");
    });


    $(window).on("scroll", function (e) {
        var scrolledY = $(window).scrollTop();
        $("#main").css("background-position", "0% -" + ((scrolledY * 0.15)) + "px");
    });

//    $(window).scroll(function () {
//        if($(window).scrollTop() > 30 + 50 + 25){
//            $(".img-wrapper").animate({
//                opacity: 0
//            }, 1000, function() {
//                // Анимация завершена; этот код работает во всех браузерах.
//            });
//        };
//    });

    var bigLogo = $('.img-wrapper');
    var smallLogo = $('.header-logo');
    var range = 200;
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        bigLogo.each(function () {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();
            offset = offset + height / 2;
            $(this).css({ 'opacity': 1 - (st - offset + range) / range });
            smallLogo.css({ 'opacity': (st - offset + range) / range });
        });
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    $("ul#sliding-team").itemslide(
        {
            start: 1
        }
    );
    $("ul#sliding-schedule").itemslide(
        {
            start: 1
        }
    );
    $("ul#sliding-questions").itemslide(
        {
            start: 1
        }
    );


    /*$("ul").on('pan', function(event) {
     console.log("PANNING OCCURED!!");
     }); //triggered when user pans

     $("ul").on('changeActiveIndex', function(event) {
     console.log("changeActiveIndex OCCURED!!");
     }); //triggered when current active item has changed
     */

    /*$("ul").on('changePos', function(event) {
     console.log("new pos: "+ $("ul").getCurrentPos());
     }); //triggered when position of carousel has changed*/

    /*$("ul").on('swipeout', function(event) {
     console.log("swipe out occured");
     });*/


    $( window ).resize(function() {
        $("ul#sliding-team").reload();
        $("ul#sliding-schedule").reload();
    });//Recalculate width and center positions and sizes when window is resized

});