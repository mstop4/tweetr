/* like-tweet.js */

function likeButtonListener() {
  let likes = Number($(this).closest(".iconset").find(".likeCounter").text());

  if ($(this).hasClass("liked")) {
    $(this).removeClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes-1);
  } else {
    $(this).addClass("liked");
    $(this).closest(".iconset").find(".likeCounter").text(likes+1);
  }
}