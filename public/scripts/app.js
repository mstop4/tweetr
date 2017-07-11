/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweet) {

  console.dir(tweet);

  let $newTweet = $("<article></article>").addClass("tweet-container");

  let $header = $("<header></header>");
  $newTweet.append($header);

  $header.append($("<img/>").addClass("avatar").attr( "src", tweet["user"]["avatars"]["large"] ));
  $header.append($("<span></span>").addClass("username").text(tweet["user"]["name"]));
  $header.append($("<span></span>").addClass("handle").text(tweet["user"]["handle"]));

  let $tweetBody = $("<div></div>").addClass("tweet-body");
  $newTweet.append($tweetBody);

  $tweetBody.append($("<p></p>").text(tweet["content"]["text"]));

  let $footer = $("<footer></footer");
  $newTweet.append($footer);
  let currentTime = new Date(Date.now());
  let timeAgo = Math.floor((currentTime - tweet["created_at"]) / 1000);

  $footer.append($("<p></p>").text(timeAgo + " seconds ago"));

  let $iconset = $("<span></span>").addClass("iconset");
  $footer.append($iconset);

  $iconset.append($("<img/>").attr("src", "images/003-black.png"));
  $iconset.append($("<img/>").attr("src", "images/002-arrows.png"));
  $iconset.append($("<img/>").attr("src", "images/001-like-of-filled-heart.png"));

  $('.tweet-list').append($newTweet);
}

function renderTweets(tweetsList) {
  for (var i = 0; i < tweetList.length; i++) {

  }
}
