
var getKey = function(obj, value){
  for(var key in obj){
    if(obj[key] == value){
      return key;
    }
  }
  return getKeyByRange(obj, value);
};


var getKeyByRange = function(obj, value) {
  var values = Object.values(obj);
  for(var i = 0; i < values.length; i++) {
    var current = values[i];
    var next = values[i + 1];
    if(next === undefined) {
      return getKey(obj, values[i]);
    }

    if(value >= current && value <= next){
      return getKey(obj, values[i]);
    }
  }
}

$(document).ready(function(){
  var anchor = window.location.hash;

  var slider = $(".carousel");

  var change_cicle = function(index) {
    var key = getKey(window.map, index);
    var color = index % 2 != 0 ? window.mapColor[key] : "none";
    $("#page-title-img").find("img").addClass("d-none");
    $(key).removeClass('d-none');
    change_doodle(color)
  }

  var change_doodle = function(color) {
    var doodle = $("#doodle");

    if (color == 'none') {
      doodle.css('background-image', "");
      return
    }
    var doodle_path = '../img/rabisco/doodle/' + color + '.png';
    doodle.css('background-image', "url(" + doodle_path+ ")");

  }

  if (anchor.length) {
    var slide = window.map[anchor];
    slider.carousel(slide, {
      interval: false
    });
    change_cicle(slide);
  } else {
    change_cicle(0);
  }

  slider.carousel({
    interval: false
  })


  slider.on('mousewheel', function(e) {
    var opts = {interval: false}
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('prev', opts);
    } else {
      $(this).carousel('next', opts);
    }
  });

  slider.on('slide.bs.carousel', function (e) {
    var slide = e.to;
    change_cicle(slide);
  });

  // var anchor = window.location.hash;
  //
  //
  // var slider = $(".carousel");
  //
  // var map = {
  //   "#c1a1": 0,
  //   "#c1a2": 6,
  //   "#c1a3": 12,
  //   "#c2a1": 18,
  //   "#c2a2": 25,
  //   "#c2a3": 30
  // }
  //
  // var set_bg_on_demand = function(el) {
  //   console.log(el);
  //   $(el).each(function(){
  //     var regex = RegExp('placeholder');
  //     var currentBg = $(this).css('background-image');
  //     if (regex.test(currentBg)) {
  //       var imgUrl = $(this).data('bg');
  //       var bg = "url(" + imgUrl + ")"
  //       var _this = $(this);
  //
  //       var downloadImg = new Image();
  //       downloadImg.onload = function() {
  //         _this.css('background-image', bg);
  //       }
  //       downloadImg.src = imgUrl;
  //
  //      } else {
  //        return
  //      }
  //    });
  // }
  //
  // var set_bgs = function(currentSlide=0) {
  //
  //   var el = $('.slick-active .placeholder');
  //   set_bg_on_demand(el);
  //   var nextToLoad = []
  //   for (i = currentSlide + 3; i <= currentSlide + 5; i++) {
  //     var lazyEl = $('[data-slick-index=' + i +']').find('.placeholder');
  //     nextToLoad.push(lazyEl);
  //     if(nextToLoad.length >= 3) {
  //       set_bg_on_demand(nextToLoad)
  //     }
  //   }
  //
  // }
  //
  // var set_doodle = function(color) {
  //   var doodle = $("#doodle");
  //   if (color == 'none') {
  //     doodle.css('background-image', "");
  //     return
  //   }
  //   var doodle_path = '../img/rabisco/doodle/' + color + '.png';
  //   doodle.css('background-image', "url(" + doodle_path+ ")");
  // }
  //
  // var change_cicle = function(nextSlide) {
  //   var slide = nextSlide + 1;
  //   var title_div = $("#page-title-img");
  //   if (slide > 0 && slide < 7) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c1a1").removeClass('d-none');
  //     if(slide % 2 === 0) {
  //       set_doodle('azul');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  //   if (slide >= 7 && slide < 13) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c1a2").removeClass('d-none');
  //     set_doodle('azul');
  //     if(slide % 2 === 0) {
  //       set_doodle('azul');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  //   if (slide >= 13 && slide < 19) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c1a3").removeClass('d-none');
  //     if(slide % 2 === 0) {
  //       set_doodle('azul');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  //   if (slide >= 19 && slide < 25) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c2a1").removeClass('d-none');
  //     if(slide % 2 === 0) {
  //       set_doodle('rosa');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  //   if (slide >= 25 && slide < 31) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c2a2").removeClass('d-none');
  //     if(slide % 2 === 0) {
  //       set_doodle('rosa');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  //   if (slide >= 31) {
  //     title_div.find('img').addClass('d-none');
  //     title_div.find(".c2a3").removeClass('d-none');
  //     if(slide % 2 === 0) {
  //       set_doodle('rosa');
  //     } else {
  //       set_doodle('none');
  //     }
  //   }
  // }
  //
  // slider.on('init', function(slick, e){
  //   set_bgs()
  // });
  //
  // slider.slick({
  //   lazyLoad: 'ondemand',
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   speed: 800,
  //   draggable: false,
  //   rows: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
  //
  // slider.on('wheel', (function(e) {
  //   e.preventDefault();
  //
  //   if (e.originalEvent.deltaY > 0) {
  //     $(this).slick('slickNext');
  //   } else {
  //     $(this).slick('slickPrev');
  //   }
  // }));
  //
  // if (anchor.length) {
  //   var slide = map[anchor];
  //   $('.carousel').slick('slickGoTo', slide);
  //   change_cicle(slide);
  // } else {
  //   change_cicle(0);
  // }
  //
  // slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   change_cicle(nextSlide);
  // });
  //
  // slider.on('afterChange', function(event, slick, currentSlide){
  //   set_bgs(currentSlide)
  // })
  //
  //

});
