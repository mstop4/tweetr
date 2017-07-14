/* click-compose.js */

$(document).ready(function () {

  // Compose button: shows and hides "Compose Tweet" form by sliding
  $('#nav-bar').on('click', '.compose', function() {

    if ($('.new-tweet').css('display') === 'none') {
      $('.new-tweet').slideDown(400);
      $('.new-tweet').find('textarea').focus();

      $('html').animate({
      scrollTop: ($('.new-tweet').offset().top)
      },400);

    } else {
      $('.new-tweet').slideUp(400);
    }
  });
});