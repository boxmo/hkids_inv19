
$(document).ready(function(){

  var slider = $(".carousel");
  var sliderMobile = $("#carousel-maes-mobile");

  slider.carousel({
    interval: false
  })

  sliderMobile.carousel({
    interval: false
  })

  slider.on('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('prev');
    } else {
      $(this).carousel('next');
    }
  });

  sliderMobile.on('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('prev');
    } else {
      $(this).carousel('next');
    }
  });

  slider.on('slide.bs.carousel', function (e) {
    var slide = e.to;
    if(slide > 0) {
      $("#page-title-img").find("img").addClass("d-none");
      $("#page-title-img").find("img.title").removeClass("d-none");
    } else {
      $("#page-title-img").find("img").removeClass("d-none");
      $("#page-title-img").find("img.title").addClass("d-none");

    }
  });


});
