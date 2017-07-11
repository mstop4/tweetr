/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let tweets = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

// Example tweet HTML

// <article class="tweet-container">

//   <header>
//     <img class="avatar" src="images/books-icon.png">
//     <span class="username">Lorem Ipsum</span>
//     <span class="handle">@lorem_ipsum</span>
//   </header>

//   <div class="tweet-body">
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi velit, hendrerit ut auctor nec, placerat id elit.<br/><span class="hashtag">#loremipsum</span></p>
//   </div>

//   <footer>
//     <p>1000 days ago</p>
//     <span class="iconset">
//       <img src="images/003-black.png"/>
//       <img src="images/002-arrows.png"/>
//       <img src="images/001-like-of-filled-heart.png"/>
//     </span>
//   </footer>

// </article>

function createTweetElement() {

  let $newTweet = $("<article></article>").addClass("tweet-container");

  let $header = $("<header></header>");
  $newTweet.append($header);

  $header.append($("<img/>").addClass("avatar").attr("src", "images/books-icon.png"));
  $header.append($("<span></span>").addClass("username").text("Lorem Ipsum"));
  $header.append($("<span></span>").addClass("handle").text("@lorem_ipsum"));

  let $tweetBody = $("<div></div>").addClass("tweet-body");
  $newTweet.append($tweetBody);

  $tweetBody.append($("<p></p>").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi velit, hendrerit ut auctor nec, placerat id elit. #loremipsum"));

  let $footer = $("<footer></footer");
  $newTweet.append($footer);

  $footer.append($("<p></p>").text("1000 days ago"));

  let $iconset = $("<span></span>").addClass("iconset")
  $footer.append($iconset);

  $iconset.append($("<img/>").attr("src", "images/003-black.png"));
  $iconset.append($("<img/>").attr("src", "images/002-arrows.png"));
  $iconset.append($("<img/>").attr("src", "images/001-like-of-filled-heart.png"));

  $('.tweet-list').append($newTweet);
}

createTweetElement();

// function renderTweets(tweetsList) {

//   for (var i = 0; i < tweetList.length; i++) {

//   }
// }
