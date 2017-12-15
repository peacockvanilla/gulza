/*
Author       : Ocean_themes.
Template Name: Gulza - Digital Agency One Page Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
                  $('.menu-top').addClass('menu-shrink');
                  var myImg = document.getElementById('Slogo');
                  myImg.style.height = '50px';
                  myImg.style.width = '50px';
			  } else {
                  $('.menu-top').removeClass('menu-shrink');
                  //var myImg = document.getElementById('Slogo');
                  //myImg.style.height = '50px';
                  //myImg.style.width = '50px';
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

		/*START HOME SLIDER JS*/	
		jQuery("#home-slider").flexslider({
			directionNav: false,
			controlnav: true,
		});
		/*END HOME SLIDER JS*/

		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/
		
		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		

		/*START GOOGLE MAP*/
		function initialize() {
		  var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(-37.7622470161679, 145.06004333496094)
		  };
		  var map = new google.maps.Map(document.getElementById('map'),
			  mapOptions);
		  var marker = new google.maps.Marker({
			position: map.getCenter(),
			icon: 'assets/img/map_pin.png',
			map: map
		  });
		}
		google.maps.event.addDomListener(window, 'load', initialize);	
		/*END GOOGLE MAP*/
	}); 	
	
	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

