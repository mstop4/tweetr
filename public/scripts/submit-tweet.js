/* submit-tweet.js */

// Resets the form message to a blank
function resetMessage(context) {
  context.text("");
}

$(document).ready( function() {

  // Submit tweet
  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    let message = $(this).find('textarea').val();
    let messageLabel = $(this).find('.form-message');

    if (!message) {
      messageLabel.text("Tweet is empty!").addClass("form-error").removeClass("form-ok");
      setTimeout(() => { resetMessage(messageLabel) }, 3000);
      return;

    } else if (message.length > 140) {
      messageLabel.text("Tweet is too long!").addClass("form-error").removeClass("form-ok");
      setTimeout(() => { resetMessage(messageLabel) }, 3000);
      return;
    }

    // send tweet
    messageLabel.text("Tweet sent!").addClass("form-ok").removeClass("form-error");
    setTimeout(() => { resetMessage(messageLabel) }, 3000);

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

    // clear form
    $(this).find('textarea').val("");
    $(this).find('textarea').trigger('input');

  });
});