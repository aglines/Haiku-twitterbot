var twit = require('twit');
var config = require('./../js/config.js');
var Twitter = new twit(config);
var WordToTweet = require('./../js/syllable_new.js');

function tweetNow(tweetTxt) {
    var tweet = {
        status: tweetTxt
    }
    Twitter.post('statuses/update', tweet, function(err, data, response) {
      if(err){
        console.log("Error in Tweeting");
      }
      else{
        console.log("Succesful Tweeting");
      }
  });
}

var Bot = function(){};

Bot.prototype.tweet = function(newWord, syllables)
{
  tweetTxt = "Word string " + newWord + " has " + syllables + " syllables";
  tweetNow(tweetTxt);
}

exports.botModule = Bot;
