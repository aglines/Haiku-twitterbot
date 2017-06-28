//twitter requirements
var twit = require('twit');
var config = require('./../js/config.js');
var Twitter = new twit(config);

var WordToTweet = require('./../js/syllable.js');

function tweetNow(tweetTxt) {
    var tweet = {
        status: tweetTxt
    }
    Twitter.post('statuses/update', tweet, function(err, data, response) {
      if(err){
        console.log("Error in Replying");
      }
      else{
        console.log("Gratitude shown successfully");
      }
  });
}

var Bot = function(){};

Bot.prototype.checkSyllables = function(newWord, syllables)
{
  tweetTxt = newWord + " has " + syllables + " syllables";
  tweetNow(tweetTxt);
}

exports.botModule = Bot;
