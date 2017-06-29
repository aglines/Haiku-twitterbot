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
var newBot = new Bot();
var haikuArray = [];

Bot.prototype.buildHaiku = function(sentence)
{
  haikuArray.push(sentence);
  //ERROR CHECKING DUE TO INCONSISTENT SENTENCE RETURNS
  for (var i = 0 ; i < haikuArray.length; i++) {
    // console.log("array " + i + " " + haikuArray[i]);
    // console.log("array i+1: " + i + " " + haikuArray[i+1]);
    if ((haikuArray[i] === haikuArray[i+1]) || (haikuArray[i] === haikuArray[i+2])) {
      haikuArray.splice(i, 1);
    }
  } //for loop
  console.log("haikuArray = " + haikuArray);
  testBeforeTweet();
}

function testBeforeTweet(){
//ERROR CHECKING DUE TO INCONSISTENT HAIKU ARRAY LENGTH, DUE TO INCONSISTENT ASSEMBLY
  if (haikuArray.length === 3) {
    newBot.tweet();
  }
  else{
    console.log("array elements is " + haikuArray.length);
  }
}

Bot.prototype.tweet = function()
{
  tweetNow(haikuArray.join(", "));
}
exports.botModule = Bot;
