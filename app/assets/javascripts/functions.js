$(function() {
    var minImageHeight = 700,
        windowHeight = $(window).height(),
        imageHeight;

    // Fixed menu
    $(window).on("scroll", function () {
        var menuHeight = $(".menu").height(),
            windowHeight = $(window).height(),
            countHeader = ($(window).scrollTop() + menuHeight / 2) / windowHeight | 0,
            countFooter = ($(window).scrollTop() + windowHeight - (30 + 25)) / windowHeight | 0;
        $("header").css('top', $(window).scrollTop() + "px");

        if(countHeader & 1)
            $("header").removeClass( "color-light" ).addClass( "color-dark" );
        else
            $("header").removeClass( "color-dark" ).addClass( "color-light" );
        if(countFooter & 1)
            $("footer").removeClass( "color-light" ).addClass( "color-dark" );
        else
            $("footer").removeClass( "color-dark" ).addClass( "color-light" );

        if(countHeader == 0 || countHeader == 6)
            $("header").addClass( "shadow" );
        else
            $("header").removeClass( "shadow" )
        if(countFooter == 0 || countFooter == 6)
            $("footer").addClass( "shadow" );
        else
            $("footer").removeClass( "shadow" )

        parallax(windowHeight);

        var bigLogo = $('.img-wrapper');
        var smallLogo = $('.header-logo');
        var range = 200;
        var st = $(this).scrollTop();
        var offset = bigLogo.offset().top;
        var height = bigLogo.outerHeight();
        offset = offset + height / 2;
        bigLogo.css({ 'opacity': 1 - (st - offset + range) / range });
        smallLogo.css({ 'opacity': (st - offset + range) / range });

        var bigLogoHeight = bigLogo.height(),
            top = (windowHeight - bigLogoHeight + $(window).scrollTop()) / 2;
        bigLogo.css('top', top + "px");

        var scrolledY = $(window).scrollTop();
        $("#section1").css("background-position", "0% -" + ((scrolledY * 0.15)) + "px");
    });

    // Fixed big logo
//    $(window).on("load scroll", function () {
//        var bigLogoHeight = $(".img-wrapper").height(),
//            top = (imageHeight - bigLogoHeight + $(window).scrollTop()) / 2;
//        $(".img-wrapper").css('top', top + "px");
//    });


//    $(window).on("scroll", function (e) {
//        var scrolledY = $(window).scrollTop();
//        $("#main").css("background-position", "0% -" + ((scrolledY * 0.15)) + "px");
//    });

//    var bigLogo = $('.img-wrapper');
//    var smallLogo = $('.header-logo');
//    var range = 200;
//    $(window).on('scroll', function () {
//
////        console.log(1);
//        var st = $(this).scrollTop();
//        var offset = bigLogo.offset().top;
//        var height = bigLogo.outerHeight();
//        offset = offset + height / 2;
//        $(this).css({ 'opacity': 1 - (st - offset + range) / range });
//        smallLogo.css({ 'opacity': (st - offset + range) / range });
//    });

//    $('a').click(function(){
//        $('html, body').animate({
//            scrollTop: $( $.attr(this, 'href') ).offset().top
//        }, 500);
//        return false;
//    });

    if( screen.width >= 480 ) {
        $('#fullpage').fullpage({
            anchors: ['main', 'about', 'team', 'schedule', 'reviews', 'questions', 'contacts'],
            menu: '#menu',
            scrollBar: true,
            slidesNavigation: false,
            scrollingSpeed: 1000,
//            autoScrolling: false,
//            fitToSection: false,
            afterRender: function () {
                var top = ($(window).height() - 163) / 2;
                $(".img-wrapper").css('top', top + "px");

//            var lat = 55.763970,
//                long = 37.629044;
//            ymaps.ready(map_init);
//            var myMap;
//            var myPlacemark;
//
//            function map_init() {
//                var place = [lat, long];
//                myMap = new ymaps.Map("section7", {
//                    center: [place[0], place[1]],
//                    zoom: 15,
//                    controls: []
//                });
//                myMap.controls.add('zoomControl', { top: 10, left: 5 });
////        myMap.behaviors.disable('scrollZoom');
//
////                myPlacemark = new ymaps.Placemark(place, {balloonContent: '<%= render :partial => 'balloon'%>'}, {
////                    iconLayout: 'default#image',
////                    iconImageHref: '<%=image_url('placemark.png')%>',
////                    iconImageSize: [28, 39],
////                    iconImageOffset: [-14, -39]
////            });
//            myMap.geoObjects.add(myPlacemark);
//            }
            },
            onLeave: function (index, nextIndex, direction) {
                var leavingSection = $(this);

                //after leaving section 2
                if (direction == 'down') {
                    $(this).removeClass('down').addClass('up');
                }

                else if (direction == 'up') {
                    $(this).removeClass('up').addClass('down');
                }
            },
            afterLoad: function (anchorLink, index) {
                var loadedSectionIndex = parseInt($(this).attr('id').slice(-1));
//            console.log(loadedSection)

                $(".section").each(function () {
                    var currentSectionIndex = parseInt($(this).attr('id').slice(-1));
                    $(this).removeClass('down').removeClass('up')

                    if (currentSectionIndex < loadedSectionIndex)
                        $(this).addClass('up');
                    else if (currentSectionIndex > loadedSectionIndex)
                        $(this).addClass('down');
                });

//            //using index
//            if(index == 3){
//                alert("Section 3 ended loading");
//            }
//
//            //using anchorLink
//            if(anchorLink == 'secondSlide'){
//                alert("Section 2 ended loading");
//            }
            }
        });
    }
    else{
        // Image height
        $(window).on("load resize", function(){
            windowHeight = $(window).height();
            if(windowHeight < minImageHeight)
                imageHeight = minImageHeight;
            else
                imageHeight = windowHeight;
            $(".page").css('height', imageHeight + "px");
        });
    }

    $("ul#sliding-team").itemslide(
        {
            start: 1,
            disable_scroll: true
        }
    );
    $("ul#sliding-schedule").itemslide(
        {
            start: 1,
            disable_scroll: true
        }
    );
    $("ul#sliding-questions").itemslide(
        {
            start: 1,
            disable_scroll: true
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
//    $(".parallax-item").each(function(){
//        var this_speed = $(this).data("speed"),
//            this_section = $(this).data("section"),
//            this_scrolled = 0;
//
//        this_speed = this_speed || speed;
//        this_section = this_section || section;
//
//        if((scrolled - imageHeight*(this_section - 2)) > 0)
//            this_scrolled = scrolled - imageHeight*(this_section - 2);
//        $(this).css({
//            'bottom':(this_scrolled*this_speed)+'px'
//        });
//    });

//    $(".parallax-item-content").each(function(){
//        var this_speed = $(this).data("speed"),
//            this_section = $(this).data("section"),
//            this_scrolled = 0;
//
//        this_speed = this_speed || speed;
//        this_section = this_section || section;
//
//        if((scrolled - imageHeight*(this_section - 2)) > 0)
//            this_scrolled = scrolled - imageHeight*(this_section - 2);
//        $(this).css({
//            'top': 60 - (this_scrolled*this_speed)+'%'
//        });
//
//        $(this).css({
////            transform: translateY(-50%);
////        '-webkit-transform':'translateY(' + 75 - (this_scrolled * this_speed) + '%)'
////            '-moz-transform':'translate3d(0px,-'+(scrolled*(scrolled_speed+0.1))+'px, 0px)',
////             '-ms-transform':'translate3d(0px,-'+(scrolled*(scrolled_speed+0.1))+'px, 0px)',
////              '-o-transform':'translate3d(0px,-'+(scrolled*(scrolled_speed+0.1))+'px, 0px)',
////                 'transform':'translate3d(0px,-'+(scrolled*(scrolled_speed+0.1))+'px, 0px)'
//        });
//    })
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