console.log("I am tweet-hover");

$(document).ready( function() {
  console.log("tweet-hover is ready.");

  // Mouse over a tweet - highlights a tweet
  $(".tweet-list").on("mouseenter", ".tweet-container", function(e) {

    console.log("Mouse in");
    $(this).addClass("highlight");
    $(this).find(".iconset").show();
  });

  // Mouse leave a tweet - unhighlights a tweet
  $(".tweet-list").on("mouseleave", ".tweet-container", function(e) {

    console.log("mouse out");
    $(this).removeClass("highlight");
    $(this).find(".iconset").hide();
  });
});