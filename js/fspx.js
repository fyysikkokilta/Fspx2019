/**
 * Listen to scroll to change header opacity class
 */

$(document).ready(function() {
  $('.finnish').hide();
});

var startY = $('.navbar').height() * 2;

function checkScroll() {
  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
}

if ($('.navbar').length > 0) {
  $(window).on('scroll load resize', function() {
    checkScroll();
  });
}

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});

function inEnglish() {
  $('.finnish').hide();
  $('.english').show();
}

function inFinnish() {
  $('.english').hide();
  $('.finnish').show();
}
