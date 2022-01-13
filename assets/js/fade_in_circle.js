$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.attention-grabber-container').offset().top - ($(window).height() / 1.2)) {

        $('.attention-grabber-container').each(function (i) {
            setTimeout(function () {
                $('.attention-grabber-container').eq(i).addClass('fadeIn');
            }, 300 * (i + 5));
        });
    } else {
        $('.attention-grabber-container').removeClass('fadeIn');
    }

});