/* submit-tweet.js */

console.log("I am submit-tweet.js");

$(document).ready( function() {
  console.log("submit-tweet.js is ready.");

  $('.new-tweet').on('submit', 'form', function(e) {
    e.preventDefault();

    let message = $(this).find('textarea').val();
    console.log(message);

    $.ajax({
      url: '/tweets/',
      data: $(this).serialize(),
      method: 'POST',
      success: function () {
        console.log('OK');
      }
    });
  });
});