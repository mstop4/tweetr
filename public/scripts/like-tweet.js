/* like-tweet.js */

// Toggles like button and updates like counter
function likeButtonListener() {
  let likes = Number($(this).closest(".iconset").find(".likeCounter").text());
  let tweetID = $(this).closest(".tweet-container").attr("data-id");
  let userID = "user";
  console.log("whomp");

  if ($(this).hasClass("liked")) {
    $(this).removeClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes-1);

    $.ajax({
      url: '/tweets/unlike/',
      data: {'tweetID': tweetID, 'userID': userID},
      method: 'POST',
      success: function(obj) {
        console.log("OK Like");
      }
    });

  } else {
    $(this).addClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes+1);

    $.ajax({
      url: '/tweets/like/',
      data: {'tweetID': tweetID, 'userID': userID},
      method: 'POST',
      success: function(obj) {
        console.log("OK Unlike");
      }
    });
  }
}