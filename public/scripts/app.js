/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweet) {

  let $newTweet = $("<article></article>").addClass("tweet-container");

  let $header = $("<header></header>");
  $newTweet.append($header);

  $header.append($("<img/>").addClass("avatar").attr( "src", tweet["user"]["avatars"]["large"] ));
  $header.append($("<span></span>").addClass("username").text(tweet["user"]["name"]));
  $header.append($("<span></span>").addClass("handle").text(tweet["user"]["handle"]));

  let $tweetBody = $("<div></div>").addClass("tweet-body");
  $newTweet.append($tweetBody);

  $tweetBody.append($("<p></p>").text(tweet["content"]["text"]));
  //$tweetBody.append($("<p></p>").text("<script>alert('oh noez!');</script>"));

  let $footer = $("<footer></footer");
  $newTweet.append($footer);


  // Calculate the time since the tweet was created.
  let currentTime = new Date(Date.now());
  let createTime = new Date(tweet["created_at"]);
  let timeAgo = Math.floor((currentTime - createTime) / 1000);

  // In seconds
  if (timeAgo < 60) {
    $footer.append($("<p></p>").text(timeAgo + " seconds ago"));

  // In minutes
  } else if (timeAgo < 3600) {
    $footer.append($("<p></p>").text(Math.floor(timeAgo/60) + " minutes ago"));

  // In hours
  } else if (timeAgo < (3600 * 24)) {
    $footer.append($("<p></p>").text(Math.floor(timeAgo/3600) + " hours ago"));

  // In days
  } else if (timeAgo < (3600 * 24 * 7)) {
    $footer.append($("<p></p>").text(Math.floor(timeAgo/3600/24) + " days ago"));

  // More than a week
  } else {
    $footer.append($("<p></p>").text(createTime.toDateString()));
  }

  let $iconset = $("<span></span>").addClass("iconset");
  $footer.append($iconset);

  $iconset.append($("<img/>").attr("src", "images/003-black.png"));
  $iconset.append($("<img/>").attr("src", "images/002-arrows.png"));
  $iconset.append($("<img/>").attr("src", "images/001-like-of-filled-heart.png"));

  return $newTweet;
}

function renderTweets(tweetList) {
  for (var i = 0; i < tweetList.length; i++) {
    $('.tweet-list').append(createTweetElement(tweetList[i]));
  }
}
