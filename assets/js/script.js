jQuery("#partner-slider").owlCarousel({
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