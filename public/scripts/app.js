/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

console.log("I am app.js");

// Calculate the time since the tweet was created.
function calculateAge(createTime) {
  let currentTime = new Date(Date.now());
  let secondsAgo = Math.floor((currentTime - createTime) / 1000);

  // Just now
  if (secondsAgo <= 0) {
    return "Just now";

  // In seconds
  } else if (secondsAgo < 60) {
    return secondsAgo + " seconds ago";

  // In minutes
  } else if (secondsAgo < 3600) {
    return Math.floor(secondsAgo/60) + " minutes ago";

  // In hours
  } else if (secondsAgo < (3600 * 24)) {
    return Math.floor(secondsAgo/3600) + " hours ago";

  // In days
  } else if (secondsAgo < (3600 * 24 * 7)) {
    return Math.floor(secondsAgo/3600/24) + " days ago";

  // More than a week
  } else {
    return createTime.toDateString();
  }
}

// Creates a tweet element to display in the tweet list
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

  let $footer = $("<footer></footer");
  $newTweet.append($footer);

  $footer.append($("<p></p>").text(calculateAge(new Date(tweet["created_at"]))));

  let $iconset = $("<span></span>").addClass("iconset");
  $footer.append($iconset);

  $iconset.append($("<i class='fa fa-flag'></i>"));
  $iconset.append($("<i class='fa fa-retweet'></i>"));
  $iconset.append($("<i class='fa fa-heart'></i>"));

  return $newTweet;
}

// Creates elements for each tweet in the database
function renderTweets(tweetList) {

  // clear all existing tweet elements first
  $('article').remove();

  for (var i = tweetList.length-1; i >= 0; i--) {
    $('.tweet-list').append(createTweetElement(tweetList[i]));
  }
}

$(document).ready( function() {
  console.log("app.js is ready.");

  // Render all tweets
  $.ajax( {
    url: '/tweets',
    method: 'GET',
    success: function(obj) {
      console.log("tweets ok");
      renderTweets(obj);
    }
  });
});