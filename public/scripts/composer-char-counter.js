console.log("I am composer-char-counter.js");

$(document).ready( function() {
  console.log("composer-char-counter.js is ready.");

  // Typing in "Compose Tweet" text box:
  // Keeps track of characters remaining
  $(".new-tweet").on("keypress", "textarea", function() {

    let charsLeft = 140 - $(this).val().length;
    let counterLabel = $(this).closest(".new-tweet").find(".counter");
    counterLabel.text(charsLeft);

  });
});

