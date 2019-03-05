
$(document).ready(function(){
  var anchor = window.location.hash;

  var slider = $(".carousel");

  if (anchor.length) {
    var slide = window.map[anchor];
    slider.carousel(slide, {
      interval: false
    });
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

});
