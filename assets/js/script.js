// jQuery("#partner-slider").owlCarousel({
//     autoplay: true,
//     lazyLoad: true,
//     loop: false,
//     animateOut: 'fadeOut',
//     margin: 20,
//     responsiveClass: true,
//     autoHeight: false,
//     autoplayTimeout: 7000,
//     smartSpeed: 800,
//     dots: false,
//     nav:false,
//     navigation : true,
//     responsive: {
//       0: {
//         items: 3,
 
//       },
  
//       600: {
//         items: 4,
        
//       },
  
//       1024: {
//         items: 6,
        
//       },
  
//       1366: {
//         items: 6,   
	      
//       }
//     },
// });
$(document).ready(function () {

  new WOW().init();
});

jQuery("#partner-slider-main").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: false,
  animateOut: 'fadeOut',
  margin: 20,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:false,
  navigation : true,
  responsive: {
    0: {
      items: 2,

    },

    600: {
      items: 4,
      
    },

    1024: {
      items: 6,
      
    },

    1366: {
      items: 6,   
      
    }
  },
});

jQuery("#recent-client-slider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    animateOut: 'fadeOut',
    margin: 20,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    nav:false,
    navigation : true,
    responsive: {
      0: {
        items: 3,
 
      },
  
      600: {
        items: 4,
        
      },
  
      1024: {
        items: 6,
        
      },
  
      1366: {
        items: 6,   
	      
      }
    },
});

jQuery("#blog-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  animateOut: 'fadeOut',
  margin: 20,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:false,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 2,
      
    },

    1024: {
      items: 3,
      
    },

    1366: {
      items:3,   
      
    }
  },
});

function leftsTalkOption(params) {
  $('.talk-trigger').on('click', function (e) {
      e.preventDefault(),
          $('.talk-area').addClass('is-visible');
          $(this).addClass('open');
          $(this).removeClass('open_btn_t');
          $(this).addClass('hide_btn_t');
          
          
  })
  $('.btn-close-search').on('click', function (e) {
      e.preventDefault(),
          $(this).parent('.talk-area').removeClass('is-visible');
          $('.talk-trigger').removeClass('open');
          $('.talk-trigger').removeClass('hide_btn_t');
          $('.talk-trigger').addClass('open_btn_t');
  })
}
leftsTalkOption();


$(document).ready(function() {
  $(".main_slider").slick({
    // infinite: true,
    dots: false,
    arrows: false,
    asNavFor: '.slider_dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });
  $('.slider_dots').slick({
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 1,
    asNavFor: '.main_slider',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '20%',
    variableWidth: false,
    pauseOnHover:false,

    // touchMove:true,
  });
});