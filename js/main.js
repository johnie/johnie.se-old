jQuery(document).ready(function($) {
  toggleMenu(".responsive-nav", "responsive-nav--open");
  fullHeight(".header");
  activeBanner(".banner");
  countUp();
  insta();
  Grid.init();
  contactForm();
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

function toggleMenu ( el, klass ) {
  var element = $(el);

  $(element).on("click", function() {
    $(this).toggleClass(klass);
  });
}

function countUp() {
  var counter = 0,
      wrapper = $(".seconds-counter");

  setInterval(function() {
    if(counter === 59) {
      wrapper.text("some scrolling time");
    }
    else {
      wrapper.text(++counter + " seconds");
    }
  }, 1000);
}

function insta() {
  var userId = 21141;

  $.ajax({
    type: "GET",
      dataType: "jsonp",
      cache: true,
      url: "https://api.instagram.com/v1/users/" + userId +"/media/recent/?access_token=21141.5b9e1e6.92ef3944ef2646dfa229da2e78d47a6a&count=4",
      success: function(data) {
        for (var i = 0; i < 4; i++) {
          $(".instagram").append("<a href='" + data.data[i].link + "' target='_blank'><figure class='insta'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></figure></a>");
        }
      }
  });
}

function contactForm() {
  var $form = $('#theForm');

  var steps = $('.pm-step').length;

  // Initialize Promin
  $form.promin({
    // Set method to AJAX
    // Still uses the form's action URL
    actions: {
        submit: 'ajax'
    },

    autofocus: false,

    // Want to update the bar on every change
    events: {
      change: function(i) {
        $('.number-current').text(i+1);
      }
    },

    // Run this when AJAX is sent
    ajaxCallback: function(data) {
      $(".contact-form").addClass('message-send');
      $(".final-message").text('Thanks! We\'ll stay in touch!')
    }
  });

  $('.contact-form__next').on('click', function(e) {
    e.preventDefault();
    $form.promin('next');
  });
}
