console.log("I am tweet-hover");

$(document).ready( function() {
  console.log("tweet-hover is ready.");

  $(".tweet-list").on("mouseover", ".tweet-container", function(e) {

    console.log("Mouse in");
    $(this).addClass("highlight");
    $(this).find(".icon").show();
    e.stopPropagation();

  });

  $(".tweet-list").on("mouseleave", ".tweet-container", function(e) {

    console.log("mouse out");
    $(this).removeClass("highlight");
    $(this).find(".icon").hide();
    e.stopPropagation();

  });
});