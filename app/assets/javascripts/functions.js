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

    var bigLogo = $('.img-wrapper');
    var smallLogo = $('.header-logo');
    var range = 200;
    $(window).on('scroll', function () {
        parallax(imageHeight);
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

    $(window).resize(function() {
        $("ul#sliding-team").reload();
        $("ul#sliding-schedule").reload();
        $("ul#sliding-questions").reload();
    });
});

function parallax(imageHeight){
    var scrolled = $(window).scrollTop(),
        section = 2,
        speed = 0.5;
    $(".parallax-item").each(function(){
        var this_speed = $(this).data("speed"),
            this_section = $(this).data("section"),
            this_scrolled = 0;

        this_speed = this_speed || speed;
        this_section = this_section || section;

        if((scrolled - imageHeight*(this_section - 2)) > 0)
            this_scrolled = scrolled - imageHeight*(this_section - 2);
        $(this).css({
            'bottom':(this_scrolled*this_speed)+'px'
        });
    })
}

//ymaps.ready(init);
//var myMap,
//    myPlacemark;
//
//
//function init(){
//    myMap = new ymaps.Map("map", {
//        center: [55.7703, 37.6256],
//        zoom: 16,
//        controls: ["zoomControl"]
//    });
//
//    myPlacemark = new ymaps.Placemark([55.7703, 37.6256], null, {
//        iconLayout: 'default#image',
////        iconImageHref: tpl_uri + '/img/placemark2.png',
//        iconImageSize: [94, 54],
//        iconImageOffset: [-47, -54],
//        iconShape: {
//            type: 'Circle',
//            coordinates: [0, 0],
//            radius: 20
//        }
//    });
//    myMap.geoObjects.add(myPlacemark);
//
//}


