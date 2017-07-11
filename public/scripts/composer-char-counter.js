console.log("I am composer-char-counter.js");

// Keeps track of characters remaining
function countCharacters() {

  const maxChars = 140;
  let charsLeft = maxChars - context.val().length;
  let counterLabel = context.closest(".new-tweet").find(".counter");

  counterLabel.text(charsLeft);

  // If over the 140-character limit, make the text red.
  // Otherwise, reset it to black
  if (charsLeft < 0 ) {
    counterLabel.addClass("charOverflow");
  } else {
    counterLabel.removeClass("charOverflow");
  }
}

$(document).ready( function() {
  console.log("composer-char-counter.js is ready.");

  // Typing in "Compose Tweet" text box:
  // Updates character counter as you type
  $(".new-tweet").on("input", "textarea", function () { countCharacters(); });
});

