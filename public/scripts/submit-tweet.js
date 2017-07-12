/* submit-tweet.js */

console.log("I am submit-tweet.js");

$(document).ready( function() {
  console.log("submit-tweet.js is ready.");

  $('#nav-bar').on('click', '.compose', function() {
    $('.new-tweet').slideToggle();
    $('.new-tweet').find('textarea').select();
  });

  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    let message = $(this).find('textarea').val();

    if (!message) {
      $(this).find('.form-message').text("Tweet is empty! 🙁");
      return;

    } else if (message.length > 140) {
      $(this).find('.form-message').text("Tweet is too long! 😵");
      return;
    }

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
  });
});