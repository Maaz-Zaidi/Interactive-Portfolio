
//Parallax & fade on scroll	

function scrollBanner() {
	$(document).on('scroll', function () {
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
			'top': (scrollPos / 2.8) + 'px',
			'opacity': 1 - (scrollPos / 300)
		});
		$('.parallax-fade-in').css({
			'opacity': 1 + (scrollPos / 300)
		});
	});
}
scrollBanner();

