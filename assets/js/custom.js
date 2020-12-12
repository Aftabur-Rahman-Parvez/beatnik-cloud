var $window = $(window);
var $root = $('html, body');

$(function(){
	// Animate with Scroll
	new WOW().init();
});

$(document).ready(function(){

  // nav menu
  $('.main_menu_ul .nav-item .nav-link').click(function(){
    $('.main_menu_ul .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
  })

  var scroll = $window.scrollTop();
    var skillsDiv = $('#skills');
    if(skillsDiv.length > 0){
        var winH = $window.height(),
            skillsT = skillsDiv.offset().top;
        if (scroll + winH > skillsT) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        }
    }

    // maginficpopup
    $('.gallery_img_popup').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
  
})

  // our product carosuel 
jQuery("#carousel_our_products").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    responsive: {
      0: {
        items: 1,
 
      },
  
      600: {
        items: 1,
        
      },
  
      1024: {
        items: 3,
        
      },
  
      1366: {
        items: 3,   

      }
    },
});

  // our Blog carosuel 
  jQuery("#carousel_our_blog").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: false,
    margin: 20,

    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    responsive: {
      0: {
        items: 1,
 
      },
  
      600: {
        items: 1,
        
      },
  
      1024: {
        items: 2,
        
      },
  
      1366: {
        items: 2,   
	      
      }
    },
});

$(function(){
	$(".counter").counterUp({
		delay:10,
		time:2000
	});
});

$window.on('scroll', function () {
 
    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
      
    } else {
        $('#header').removeClass('header-sticky');
        
    }
  
});


