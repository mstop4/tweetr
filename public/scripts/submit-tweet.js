/* submit-tweet.js */

console.log("I am submit-tweet.js");

$(document).ready( function() {
  console.log("submit-tweet.js is ready.");

  $('#nav-bar').on('click', '.compose', function() {
    $('.new-tweet').slideToggle();
  });

  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    let message = $(this).find('textarea').val();

    if (!message || message.length > 140) {
      alert("You fool!");
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