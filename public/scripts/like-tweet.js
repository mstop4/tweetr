/* like-tweet.js */

// Toggles like button and updates like counter
function likeButtonListener() {
  let likes = Number($(this).closest(".iconset").find(".likeCounter").text());
  let tweetID = $(this).closest(".tweet-container").attr("data-id");

  if ($(this).hasClass("liked")) {
    $(this).removeClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes-1);

    $.ajax({
      url: '/tweets/unlike/' + tweetID,
      method: 'POST',
      success: function(obj) {
        console.log("OK Like");
      }
    });

  } else {
    $(this).addClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes+1);

    $.ajax({
      url: '/tweets/like/' + tweetID,
      method: 'POST',
      success: function(obj) {
        console.log("OK Unlike");
      }
    });
  }
}