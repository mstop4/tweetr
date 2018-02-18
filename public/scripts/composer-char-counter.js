// Keeps track of characters remaining
function countCharacters() {

  const maxChars = 280;
  let charsLeft = maxChars - $(this).val().length;
  let counterLabel = $(this).closest(".new-tweet").find(".counter");

  counterLabel.text(charsLeft);

  // If over the 280-character limit, make the text red.
  // Otherwise, reset it to black
  if (charsLeft < 0 ) {
    counterLabel.addClass("charOverflow");
  } else {
    counterLabel.removeClass("charOverflow");
  }
}

$(document).ready( function() {

  // Typing in "Compose Tweet" text box:
  // Updates character counter as you type
  $(".new-tweet").on("input", "textarea", countCharacters);
});

