/* submit-tweet.js */
console.log("I am submit-tweet.js");

$(document).ready( function() {
  console.log("submit-tweet.js is ready.");

  // Compose button: shows and hides "Compose Tweet" form by sliding
  $('#nav-bar').on('click', '.compose', function() {

    if ($('.new-tweet').css('display') === 'none') {
      $('.new-tweet').slideDown(400);
      $('.new-tweet').find('textarea').focus();

    } else {
      $('.new-tweet').slideUp(400);
    }
  });

  // Submit tweet
  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    // Check tweet length
    let message = $(this).find('textarea').val();

    if (!message) {
      $(this).find('.form-message').text("Tweet is empty!").addClass("form-error");
      return;

    } else if (message.length > 140) {
      $(this).find('.form-message').text("Tweet is too long!").addClass("form-error");
      return;
    }

    // clear form
    $(this).find('textarea').val("");
    $(this).find('textarea').trigger('input');

    // send tweet
    $(this).find('.form-message').text("Tweet sent!").addClass("form-ok");

    $.ajax({
      url: '/tweets/',
      data: $(this).serialize(),
      method: 'POST',
      success: function () {

        // refresh tweet list
        $.ajax( {
          url: '/tweets',
          method: 'GET',
          success: function(obj) {
            renderTweets(obj);
          }
        });
      }
    });
  });
});