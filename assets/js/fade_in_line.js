$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.line').offset().top - ($(window).height() / 1.2)) {

        $('.line').each(function (i) {
            setTimeout(function () {
                $('.line').eq(i).addClass('fadeIn');
                $('.search').eq(i).addClass('search--open');
            }, 300 * (i + 5));
        });
    } else {
        $('.line').removeClass('fadeIn');
        $('.search').removeClass('search--open');
    }

});