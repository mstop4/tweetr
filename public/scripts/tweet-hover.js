$(document).ready( function() {

  // Mouse over a tweet - highlights a tweet
  $(".tweet-list").on("mouseenter", ".tweet-container", function(e) {
    $(this).addClass("highlight");
    $(this).find(".iconset").show();
  });

  // Mouse leave a tweet - unhighlights a tweet
  $(".tweet-list").on("mouseleave", ".tweet-container", function(e) {
    $(this).removeClass("highlight");
    $(this).find(".iconset").hide();
  });
});