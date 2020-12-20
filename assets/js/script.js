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

  // wow = new WOW({
  //   animateClass: 'animated',
  //   offset: 100
  // });
  // wow.init();
  // new WOW.init();

  AOS.init({
    duration: 1200
  });
});

function hamburgerOption(params) {
  $('.hamburger-trigger').on('click', function (e) {
    alert("h1")
      e.preventDefault(),
          $('.hamburger-area').addClass('is-visible');
          $(this).addClass('open');
          
  })
  $('.btn-close-search').on('click', function (e) {
      e.preventDefault(),
          $(this).parent('.hamburger-area').removeClass('is-visible');
          $('.hamburger-trigger').removeClass('open');
  })
}
hamburgerOption();

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
  $(".main_slider .slick-slide").hide();
  $('#trigger').on('mousemove', function() {
    
    $(".main_slider .slick-slide.slick-active").show();
    $(".main_slider .slick-slide").show();
    $("#trigger").hide();
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

$(document).ready(function(){
  $(".services-card").mouseover(function(){
    $(".services-card").addClass("hover");
    $(this).addClass("active");
  });
  $(".services-card").mouseout(function(){
    $(".services-card").removeClass("hover");
    $(this).removeClass("active");
  });
});








//
// Configuration
//

// ms to wait after dragging before auto-rotating
var rotationDelay = 3000
// scale of the globe (not the canvas element)
var scaleFactor = 0.9
// autorotation speed
var degPerSec = 6
// start angles
var angles = { x: -20, y: 40, z: 0}
// colors
var colorWater = '#000'
var colorLand = '#004A71'
var colorGraticule = '#000'
var colorCountry = '#638BA0'


//
// Handler
//

function enter(country) {
  var country = countryList.find(function(c) {
    return parseInt(c.id, 10) === parseInt(country.id, 10)
  })
  current.text(country && country.name || '')
}

function leave(country) {
  current.text('')
}

//
// Variables
//

var current = d3.select('#current')
var canvas = d3.select('#globe')
var context = canvas.node().getContext('2d')
var water = {type: 'Sphere'}
var projection = d3.geoOrthographic().precision(0.1)
var graticule = d3.geoGraticule10()
var path = d3.geoPath(projection).context(context)
var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
var r0 // Projection rotation as Euler angles at start.
var q0 // Projection rotation as versor at start.
var lastTime = d3.now()
var degPerMs = degPerSec / 1000
var width, height
var land, countries
var countryList
var autorotate, now, diff, roation
var currentCountry

//
// Functions
//

function setAngles() {
  var rotation = projection.rotate()
  rotation[0] = angles.y
  rotation[1] = angles.x
  rotation[2] = angles.z
  projection.rotate(rotation)
}

function scale() {
  width = (document.documentElement.clientWidth)/1.3
  height = (document.documentElement.clientHeight)/1.7

  // width =600
  // height = 400

  //   var delay = (function(){
  //     var timer = 0;
  //     return function(callback, ms){
  //         clearTimeout (timer);
  //         timer = setTimeout(callback, ms);
  //     };
  //   })();

  // $(function() {
  //     var pause = 000;
  //     // will only process code within delay(function() { ... }) every 100ms.

  //     $(window).resize(function() {
         
  //             var width1 = $(window).width();
  //             if( width1 >= 1600 && width1 <= 2200 ) {
  //               width =900
  //               height = 500
  //             } else if( width1 >= 768 && width1 <= 959 ) {
  //                 // code for tablet view
  //             } else if( width1 >= 480 && width1 <= 767 ) {
  //                 // code for mobile landscape
  //             } else if( width1 <= 479 ) {
  //                 // code for mobile portrait
  //             }
         
  //     });

  //     $(window).resize();
  // });

 




  canvas.attr('width', width).attr('height', height)
  projection
    .scale((scaleFactor * Math.min(width, height)) / 2)
    .translate([width / 2, height / 2])
  render()
}

function startRotation(delay) {
  autorotate.restart(rotate, delay || 0)
}

function stopRotation() {
  autorotate.stop()
}

function dragstarted() {
  v0 = versor.cartesian(projection.invert(d3.mouse(this)))
  r0 = projection.rotate()
  q0 = versor(r0)
  stopRotation()
}

function dragged() {
  var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
  var q1 = versor.multiply(q0, versor.delta(v0, v1))
  var r1 = versor.rotation(q1)
  projection.rotate(r1)
  render()
}

function dragended() {
  startRotation(rotationDelay)
}

function render() {
  context.clearRect(0, 0, width, height)
  fill(water, colorWater)
  stroke(graticule, colorGraticule)
  fill(land, colorLand)
  if (currentCountry) {
    fill(currentCountry, colorCountry)
  }
}

function fill(obj, color) {
  context.beginPath()
  path(obj)
  context.fillStyle = color
  context.fill()
}

function stroke(obj, color) {
  context.beginPath()
  path(obj)
  context.strokeStyle = color
  context.stroke()
}

function rotate(elapsed) {
  now = d3.now()
  diff = now - lastTime
  if (diff < elapsed) {
    rotation = projection.rotate()
    rotation[0] += diff * degPerMs
    projection.rotate(rotation)
    render()
  }
  lastTime = now
}

function loadData(cb) {
  d3.json('http://127.0.0.1:5500/assets/data/110m.json', function(error, world) {
    if (error) throw error
    d3.tsv('http://127.0.0.1:5500/assets/data/world-country-names.tsv', function(error, countries) {
      if (error) throw error
      cb(world, countries)
    })
  })
}

// https://github.com/d3/d3-polygon
function polygonContains(polygon, point) {
  var n = polygon.length
  var p = polygon[n - 1]
  var x = point[0], y = point[1]
  var x0 = p[0], y0 = p[1]
  var x1, y1
  var inside = false
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1]
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
    x0 = x1, y0 = y1
  }
  return inside
}

function mousemove() {
  var c = getCountry(this)
  if (!c) {
    if (currentCountry) {
      leave(currentCountry)
      currentCountry = undefined
      render()
    }
    return
  }
  if (c === currentCountry) {
    return
  }
  currentCountry = c
  render()
  enter(c)
}

function getCountry(event) {
  var pos = projection.invert(d3.mouse(event))
  return countries.features.find(function(f) {
    return f.geometry.coordinates.find(function(c1) {
      return polygonContains(c1, pos) || c1.find(function(c2) {
        return polygonContains(c2, pos)
      })
    })
  })
}


//
// Initialization
//

setAngles()

canvas
  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
   )
  .on('mousemove', mousemove)

loadData(function(world, cList) {
  land = topojson.feature(world, world.objects.land)
  countries = topojson.feature(world, world.objects.countries)
  countryList = cList
  
  window.addEventListener('resize', scale)
  scale()
  autorotate = d3.timer(rotate)
})