"use strict";

const mongo = require("mongodb");

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      //console.dir(newTweet);
      db.collection("tweets").insert(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      let tweets = db.collection("tweets").find().toArray((err, tweets) => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, tweets.sort(sortNewestFirst));
      });
    },

    // Updates the number of likes for a tweet
    addLike: function(tweetID, userID, callback) {
      db.collection("tweets").update(
        { "_id": mongo.ObjectID(tweetID) },
        { $push: { likes: userID }
      });

      callback(null, true);
    },

    // Updates the number of likes for a tweet
    removeLike: function(tweetID, userID, callback) {
      db.collection("tweets").update(
        { "_id": mongo.ObjectID(tweetID) },
        { $pull: { likes: userID }
      });

      callback(null, true);
    }
  };
}
