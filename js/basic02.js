$(function () {

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            // $(this).parent().siblings().find('.submenu').slideUp();
            $(this).next().stop().slideToggle();
            $(this).toggleClass('on')
        }
    });

    $('#header .right').on('click', function () {
        $('#header .gnb').toggleClass('on')
    })

    $(window).on('resize', function () {
        $('.submenu').removeAttr('style');
        $('#header .gnb>ul>li>a').removeClass('on')
    })

    $('.main_slide').slick({
        arrows: false,
        //autoplay: true,
    });

    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('#mainProduct .arrows i:first-child').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('#mainProduct .arrows i:last-child').on('click', function () {
        $('.product_slide').slick('slickNext')
    });
})