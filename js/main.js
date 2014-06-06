jQuery(document).ready(function($) {
  fullHeight(".header");
  activeBanner(".banner");
});

$(window).resize(function(){
  fullHeight(".header");  
});

function fullHeight(el) {
  var element = $(el);

  element.css({
    "height" : $(window).height() + "px"
  });
}

function activeBanner( el ) {
  var element = $(el);

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
      element.addClass("active");
    }
    else{
      element.removeClass("active");
    }
  });
}
