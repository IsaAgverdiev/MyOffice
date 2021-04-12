$(document).ready(function () {
	$('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});

	$('.popup-with-form').magnificPopup({
		// type: 'inline',
		preloader: false,
		focus: '#name',
		closeBtnInside: true,
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',

		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			open: function () {
				jQuery('body').addClass('noscroll');
			},
			close: function () {
				jQuery('body').removeClass('noscroll');
			}
		},
		midClick: true
	});
	$('.btn-burger').click(function () {
		$('.header__nav-wrap').toggleClass('header__nav-wrap--active');
		if ($(window).width() < 576) {
			$('body').toggleClass('hidden');
		}

	});
	$('.header__menu-item').click(function () {
		$('.header__nav-wrap').toggleClass('header__nav-wrap--active');
		$('body').toggleClass('hidden');

	})

});
