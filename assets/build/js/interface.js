$(document).ready(function() {
	//CATALOG-FILTER
	$('body').on('click','.catalog-filter-toggle', function(e){
		e.preventDefault();
		$('.catalog__aside').addClass('active');
		$('.catalog-filter__overlay').addClass('active');
	});
	$('body').on('click','.catalog-filter__close', function(e){
		e.preventDefault();
		$('.catalog__aside').removeClass('active');
		$('.catalog-filter__overlay').removeClass('active');
	});
	$('body').on('click','.catalog-filter__overlay', function(e){
		e.preventDefault();
		$('.catalog__aside').removeClass('active');
		$(this).removeClass('active');
	});

	//CATALOG-BTN
	$('body').on('click','.js-catalog-btn', function(e){
		e.preventDefault();
		$('.page-catalog').slideToggle(100);
		$('.page__bg').fadeToggle();
		$('body').toggleClass('fixed');
	});
	$('body').on('click','.page__bg', function(e){
		e.preventDefault();
		$('.page-catalog').slideUp(100);
		$('.page__bg').fadeOut();
		$('body').removeClass('fixed');
	});
	$('body').on('click','.js-page-catalog-close', function(e){
		e.preventDefault();
		$('.page-catalog').slideUp(100);
		$('.page__bg').fadeOut();
		$('body').removeClass('fixed');
	});
	//CATALOG-VIEW
	$('body').on('click','.js-page-catalog-link', function(e){
		e.preventDefault();
		$('.page-catalog-link').removeClass('m-active');
		$(this).addClass('m-active');
        var view = $(this).data('view');
        $(".page-catalog-view__item").addClass('dnone');
        $("#view"+view).removeClass('dnone');
	});


	//MENU-MOBILE
	//second
	$('body').on('click','.js-second-toggle', function(e){
		e.preventDefault();
		$(this).parent('.menu-mobile__item').find('.menu-mobile-second').addClass('active');
	});
	$('body').on('click','.js-back-first', function(e){
		e.preventDefault();
		$(this).parents('.menu-mobile__item').find('.menu-mobile-second').removeClass('active');
	});
	//third
	$('body').on('click','.js-third-toggle', function(e){
		e.preventDefault();
		$(this).parent('.menu-mobile__item').find('.menu-mobile-third').addClass('active');
	});
	$('body').on('click','.js-back-second', function(e){
		e.preventDefault();
		$(this).parents('.menu-mobile__item').find('.menu-mobile-third').removeClass('active');
	});
	//fourth
	$('body').on('click','.js-fourth-toggle', function(e){
		e.preventDefault();
		$(this).parent('.menu-mobile__item').find('.menu-mobile-fourth').addClass('active');
	});
	$('body').on('click','.js-back-third', function(e){
		e.preventDefault();
		$(this).parents('.menu-mobile__item').find('.menu-mobile-fourth').removeClass('active');
	});

	//Phones-mobile-list
	$('body').on('click','.js-top-phones-mobile__link', function(e){
		e.preventDefault();
		$(this).parents('.top-phones-mobile').find('.top-phones-mobile__list').slideToggle(100);
	});
	$(document).click(function (e){
		var div = $(".top-phones-mobile");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.top-phones-mobile__list').slideUp(100);
		}
	});


	//Search-mobile-toggle
	$('body').on('click','.js-top-search__link', function(e){
		e.preventDefault();
		$(this).parents('.top-search').find('.top-search__form').show(10);
	});
	// $(document).click(function (e){
	// 	var div = $(".top-phones-mobile");
	// 	if (!div.is(e.target)
	// 	    && div.has(e.target).length === 0) {
	// 		$('.top-phones-mobile__list').slideUp(100);
	// 	}
	// });

	//POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        toolbar  : false,
        smallBtn: true,
		touch: false,
        buttons: [

        ],
    });

	//POPUP-VIDEO
    $(".js-play-btn").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        clickOutside : 'close',
        smallBtn: true,
        buttons: [
            
        ],
    });


    //INPUT FILE
    $('.custom-file input[type="file"]').change(function(){
		var value = $(".custom-file input[type='file']").val();
		$('.custom-file .js-value').val(value);
	});


    if ($('#contacts_map').length>0) {
        ymaps.ready(initializeContacts);
    };
	if($('#main_map').length>0){
		ymaps.ready(initializeMainMap);
	}


	//ACHIEVEMENTS SLIDER
	if ($('.js-achievements-slider').length > 0) {
		let $statusTop = $('.achievements-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.achievements-slider-pagingInfo .s-total');
		let $sliderTop = $('.achievements-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			if((slick.slideCount) == 1){
				$sliderTop.parents('.page-slider-wrap').find('.slider-nav').hide();
			}
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			// fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-top-prev"),
			nextArrow: $(this).find(".js-top-next"),
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow:1,
						slidesToScroll: 1,
					}
				},
			],
		});
	};


	//NEWS SLIDER
	if ($('.js-news-slider').length > 0) {
		let $statusTop = $('.news-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.news-slider-pagingInfo .s-total');
		let $sliderTop = $('.news-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			if((slick.slideCount) == 1){
				$sliderTop.parents('.m-news').find('.slider-nav').hide();
			}
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			// fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-top-prev"),
			nextArrow: $(this).find(".js-top-next"),
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	};

	//POPULAR SLIDER
	if ($('.js-popular-slider').length > 0) {
		let $statusTop = $('.popular-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.popular-slider-pagingInfo .s-total');
		let $sliderTop = $('.popular-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			// fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-popular-prev"),
			nextArrow: $(this).find(".js-popular-next"),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	};


	//PROGRAMMS SLIDER
	if ($('.js-programms-slider').length > 0) {
		let $statusTop = $('.programms-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.programms-slider-pagingInfo .s-total');
		let $sliderTop = $('.programms-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			// fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-top-prev"),
			nextArrow: $(this).find(".js-top-next"),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	};


	//OTHER SLIDER
	if ($('.js-other-slider').length > 0) {
		let $statusTop = $('.other-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.other-slider-pagingInfo .s-total');
		let $sliderTop = $('.other-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			// fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-other-prev"),
			nextArrow: $(this).find(".js-other-next"),
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	};


	//PRODUCT SLIDER
	if ($('.js-product-top-slider').length > 0) {
		let $statusTop = $('.product-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.product-slider-pagingInfo .s-total');
		let $sliderTop = $('.product-top-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			fade:true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			asNavFor: '.product-top-vertical__slider',
			prevArrow: $(this).find(".js-product-prev"),
			nextArrow: $(this).find(".js-product-next"),
		});


		let $sliderVert = $('.product-top-vertical__slider');
		$sliderVert.slick({
			infinite: true,
			lazyLoad: 'progressive',
			arrows: false,
			dots:false,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			vertical:true,
			slidesToShow: 4,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: '.product-top-slider',
			responsive: [
				{
					breakpoint: 1350,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
			],
		});
	};

	//OTHER SLIDER
	if ($('.js-reviews-slider').length > 0) {
		let $statusTop = $('.reviews-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.reviews-slider-pagingInfo .s-total');
		let $sliderTop = $('.reviews-slider');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			if((slick.slideCount) == 1){
				$sliderTop.parents('.reviews').find('.slider-nav').hide();
			}
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text( i );
			$statusTotalTop.text(slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(this).find(".js-reviews-prev"),
			nextArrow: $(this).find(".js-reviews-next"),
		});
	};

	//TABLE-WRAP
	if ($("table").length > 0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}

	mobileSliderStart();


	//SLIDER COUNT
	if ($( ".js-slider-count" ).length>0) {
		var sliders = $(".js-slider-count");
		sliders.each(function() {
			console.log($(this).attr("data-rangemax"));
			var minInput = BX($(this).attr("data-input-min"));
			var maxInput = BX($(this).attr("data-input-max"));

			$(this).slider({
				animate: true,
				range: true,
				values: [ $(this).attr("data-valuemin"), $(this).attr("data-valuemax") ],
				min: +$(this).attr("data-rangemin"),
				max: +$(this).attr("data-rangemax"),
				step: 1,
				create: function( event, ui ) {
					let cLeft = $(this).find('.ui-slider-handle:eq(0)');
					let cRight = $(this).find('.ui-slider-handle:eq(1)');
					cLeft.append("<span class='price-range-min'>" + $(this).attr("data-valuemin") + "</span>");
					cRight.append("<span class='price-range-max'>" + $(this).attr("data-valuemax") + "</span>");
				},
				slide: function (event, ui) {
					let cLeftValue = $(this).find('.price-range-min');
					let cRightValue = $(this).find('.price-range-max');
					
					minInput.value = ui.values[0];
					maxInput.value = ui.values[1];

					cLeftValue.html(ui.values[0]);
					cRightValue.html(ui.values[1]);
					
					smartFilter.keyup(minInput);
					smartFilter.keyup(maxInput);
				}
			});
		})
		
	};
	


	//SELECT-CUSTOM
	if ($('.fs').length>0) {
		setTimeout(function() {
		 	$('.fs').styler();
		}, 100)
		
	}



	//PRODUCT-chars-toggle
	$('body').on('click','.js-product-chars-show', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).text(function(i, v){
			return v === 'Показать все характеристики' ? 'Скрыть' : 'Показать все характеристики'
		});
		$(this).parents('.product-top-chars').find('.m-hidden').slideToggle(50);
	});

	//PRODUCT-chars-toggle
	$('body').on('click','.js-product-equipment-show', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).text(function(i, v){
			return v === 'Показать всё оборудование' ? 'Скрыть' : 'Показать всё оборудование'
		});
		$(this).parents('.product-info__wrap').find('.product-mobile-hidden').slideToggle(50);
	});

	//PRODUCT-about-toggle
	$('body').on('click','.js-product-about-show', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).text(function(i, v){
			return v === 'Показать всё описание' ? 'Скрыть' : 'Показать всё описание'
		});
		$(this).parents('.product-about__in').find('.product-about-hidden').slideToggle(50);
	});

	//PRINT
    $('.js-print').click(function(){
        window.print();
    });
});

$(window).resize(function () {
	mobileSliderStart();
});


// functions
function initializeContacts() {
	var myMap = new ymaps.Map("contacts_map", {
		center:[53.879888,27.586757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.879888,27.586757],{
			// balloonContentBody: 'Адрес',
		},{
		iconLayout: 'default#image',
	}); 

	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
	myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects.add(myPlacemark);
}

function initializeMainMap() {
	var myMap = new ymaps.Map("main_map", {
		center:[53.879888,27.586757],
		zoom: 13,
		controls: []
	}, {
		suppressMapOpenBlock: true
	}); 
			
	var myPlacemark = new ymaps.Placemark([53.879888,27.586757],{
			// balloonContentBody: 'Адрес',
		},{
		iconLayout: 'default#image',
	}); 

	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
	myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects.add(myPlacemark);
}

function mobileSliderStart() {
	var $m_sl = $('.js-mob-slider');
	if (document.documentElement.clientWidth < 600) {

		$('.js-mob-slider').each(function(){
			let slickInduvidual = $(this);
			let $statusTop = slickInduvidual.parents('.mob-slider-wrap').find('.s-current');
			let $statusTotalTop = slickInduvidual.parents('.mob-slider-wrap').find('.s-total');
			slickInduvidual.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				if((slick.slideCount) == 1){
					$sliderTop.parents('.slider-nav').find('.slider-nav').hide();
				}
				var i = (currentSlide ? currentSlide : 0) + 1;
				$statusTop.text( i );
				$statusTotalTop.text(slick.slideCount);
			});

			slickInduvidual.not('.slick-initialized').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				arrows: true,
				useTransform: true,
				equalizeHeight: false,
				"accessibility": false,
				speed: 500,
				pauseOnHover: false,
				nextArrow: slickInduvidual.parents('.mob-slider-wrap').find(".js-next"),
				prevArrow: slickInduvidual.parents('.mob-slider-wrap').find(".js-prev"),
				responsive: [
					{
						breakpoint: 400,
						settings: {
							slidesToShow:1,
							slidesToScroll: 1,
						}
					},
				],
			});
		})
	} else{
		if($m_sl.hasClass('slick-initialized')) {
			$m_sl.slick("unslick");
		}
	}
}