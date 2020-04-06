/**
 * File main.js.
 *
 * Theme main script.
 *
 * Contains all theme custom features.
 */
var ss;
(function ($) {
	ss = {
		init: function () {
			this.img();
			this.nav();
			this.form();
			this.misc();
			this.slider();
			this.gallery();
			AOS.init();
			AOS.refresh();
		},
		ie: function () {
			try {
				if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					$('body').addClass('ie-user');
					return true;
				}
			} catch (err) {
				console.log(err);
			}
			return false;
		},
		img: function (context) {
			if (!context) context = $('body');
			context.find('.bg-cover,[data-fix="image"]').each(function () {
				var wrap = $(this),
					image = wrap.find('>img');
				if (image.attr('src')) {
					if (wrap.data('fix') != 'image') {
						image.hide();
						wrap.css({
							'background-image': 'url(\'' + image.attr('src') + '\')'
						});
					} else {
						wrap.find('.svg.img-fluid').css({
							'background-image': 'url(\'' + image.attr('src') + '\')'
						});
					}
				}
				if (ss.ie()) {
					wrap.find('.svg').removeClass('img-fluid');
				}
			});
		},
		nav: function () {

		},
		form: function () {

		},
		misc: function () {
			try {
				$('.same-height').matchHeight();

				$("#typed").length && new Typed("#typed", {
					stringsElement: "#typed-items",
					typeSpeed: 70,
					backSpeed: 50,
					backDelay: 500,
					startDelay: 1e3,
					loop: !0
				});

				$('.js-multiselect').multiselect({
					includeSelectAllOption: true,
					nonSelectedText: 'Services You Are Interested In'
				});

				var _tabCarousel = setInterval(function () {
					var _tabs = $('.nav-tabs.autoplay > li');
					var _active = _tabs.find('a').filter('.active').parent('li');
					var _next = _active.next('li');
					toClick = _next.length ? _next.find('a') : _tabs.eq(0).find('a');
					toClick.trigger('click');
				}, 3000);
				$('.nav-tabs.hover-enabled > li > a').hover(
					function () {
						$(this).tab('show');
						clearInterval(_tabCarousel);
					},
					function () {
						_tabCarousel = setInterval(function () {
							var _tabs = $('.nav-tabs.autoplay > li');
							var _active = _tabs.find('a').filter('.active').parent('li');
							var _next = _active.next('li');
							toClick = _next.length ? _next.find('a') : _tabs.eq(0).find('a');
							toClick.trigger('click');
						}, 3000);
					}
				);
				$(".js-story-more").on("click", function (e) {
					e.preventDefault(), jQuery(".our-story .show-more-text").slideDown(), jQuery(this).hide()
				});

				jQuery('.dropdown-item').on('click', function (e) {
					e.preventDefault();
					var datahref = jQuery(this).attr('data-href');
					var datatxt = jQuery(this).text();
					jQuery('#' + datahref).trigger('click');
					jQuery('.dropdown-item').removeClass('active');
					jQuery(this).addClass('active');
					jQuery('.js-selectedval').text(datatxt);
				});

				// smooth scroll down 
				jQuery("#smooth-scroll-btn").click(function () {
					jQuery('html, body').animate({
						scrollTop: jQuery("#smooth-scroll-body").offset().top - 75
					}, 1000);
				});

			} catch (err) {
				console.log(err);
			}
		},
		slider: function () {
			try {
				$('.js-single-slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class="slide-arrow prev-arrow"><span class="icon-arrow-left"></span></button>',
					nextArrow: '<button class="slide-arrow next-arrow"><span class="icon-arrow-right"></span></button>'
				});

				jQuery(".js-testimonial-slider").slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: '<button class="slide-arrow prev-arrow"><span class="icon-arrow-left"></span></button>',
					nextArrow: '<button class="slide-arrow next-arrow"><span class="icon-arrow-right"></span></button>',
					responsive: [{
						breakpoint: 1600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}, {
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							dots: true,
						}
					}]
				});

				$('.js-team-partner-slider').slick({
					slidesToShow: 5,
					slidesToScroll: 5,
					arrows: false,
					dots: true,
					responsive: [{
						breakpoint: 1100,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						}
					}, {
						breakpoint: 374,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: false,
							dots: true,
						}
					}]
				});

				$('.js-footer-testimonial').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				});

				var winWidth = $(window).width();
				winWidth < 768 ? jQuery("#tabCarousel").carousel({
					interval: !1,
					pause: !0
				}) : jQuery("#tabCarousel").carousel({
					interval: 4e3,
					mode: "fade"
				});
				var t = !1;
				$("#tabCarousel").on("click", ".nav a", function () {
					t = !0, $(".nav li").removeClass("active"), $(this).parent().addClass("active")
				}).on("slid.bs.carousel", function (e) {
					if (!t) {
						var i = $(".nav").children().length - 1,
							s = $(".nav li.active");
						s.removeClass("active").next().addClass("active"), i == parseInt(s.data("slide-to")) && $(".nav li").first().addClass("active")
					}
					t = !1
				}), $(".js-result-selector").on("change", function () {
					var e = this.value;
					$(".nav-pills li." + e).trigger("click")
				})

			} catch (err) {
				console.log(err);
			}
		},
		gallery: function () {

		}
	};

	$(window).scroll(function () {
		jQuery(window).scrollTop() > 0 ? $(".site-header").addClass("header-dark") : $(".site-header").removeClass("header-dark")
	});
	$(function () {
		ss.init();
	});
})(jQuery);