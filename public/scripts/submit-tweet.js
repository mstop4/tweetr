/* submit-tweet.js */

$(document).ready( function() {

  // Submit tweet
  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    let message = $(this).find('textarea').val();

    if (!message) {
      $(this).find('.form-message').text("Tweet is empty!").addClass("form-error").removeClass("form-ok");
      return;

    } else if (message.length > 140) {
      $(this).find('.form-message').text("Tweet is too long!").addClass("form-error").removeClass("form-ok");;
      return;
    }

    // send tweet
    console.log("tweet sent");
    $(this).find('.form-message').text("Tweet sent!").addClass("form-ok").removeClass("form-error");

    $.ajax({
      url: '/tweets/',
      data: $(this).serialize(),
      method: 'POST',
      success: function () {

        console.log('tweet submit OK');

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

    // clear form
    $(this).find('textarea').val("");
    $(this).find('textarea').trigger('input');

  });
});