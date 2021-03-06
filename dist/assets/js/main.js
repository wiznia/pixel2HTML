var pixel2HTML = {
	init: function() {
		pixel2HTML.bindEvents();
		pixel2HTML.setupCarousel();
	},

	setupCarousel: function() {
		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: true
		});
	},

	bindEvents: function() {
		$('.carousel__nav').on('click', function(e) {
			e.preventDefault();
			$('.owl-carousel').trigger('next.owl.carousel');
		});

		$('.footer__lang-item').on('click', pixel2HTML.toggleLanguage);

		$('.nav-menu').on('click', pixel2HTML.toggleMenu);
	},

	toggleLanguage: function() {
		$('.footer__lang-selector-list').toggleClass('active');
	},

	toggleMenu: function() {
		$('.nav').toggleClass('active');
	}
};

$(document).ready(pixel2HTML.init);