
$(document).ready(function(){


  var slider = $(".carousel");

  var set_bg_on_demand = function(el) {
    console.log(el);
    $(el).each(function(){
      var regex = RegExp('placeholder');
      var currentBg = $(this).css('background-image');
      if (regex.test(currentBg)) {
        var imgUrl = $(this).data('bg');
        var bg = "url(" + imgUrl + ")"
        var _this = $(this);

        var downloadImg = new Image();
        downloadImg.onload = function() {
          _this.css('background-image', bg);
        }
        downloadImg.src = imgUrl;

       } else {
         return
       }
     });
  }

  var set_bgs = function(currentSlide=0) {

    var el = $('.slick-active .placeholder');
    set_bg_on_demand(el);
    var nextToLoad = []
    for (i = currentSlide + 3; i <= currentSlide + 5; i++) {
      var lazyEl = $('[data-slick-index=' + i +']').find('.placeholder');
      nextToLoad.push(lazyEl);
      if(nextToLoad.length >= 3) {
        set_bg_on_demand(nextToLoad)
      }
    }

  }


  var set_doodle = function(color) {
    var doodle = $("#doodle");
    if (color === false) {
      doodle.css('background-image', "");
      return
    }
    var doodle_path = '../img/rabisco/doodle/' + color + '.png';
    console.log(doodle_path);
    doodle.css('background-image', "url(" + doodle_path+ ")");
  }

  slider.on('init', function(slick, e){
    set_bgs()
  });

  slider.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 800,
    draggable: false,
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));


  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slide = nextSlide + 1;
    if(slide % 2 === 0) {
      set_doodle('verde');
    } else {
      set_doodle(false);
    }
  });

  slider.on('afterChange', function(event, slick, currentSlide){
    set_bgs(currentSlide)
  })



});
