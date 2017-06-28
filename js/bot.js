//twitter requirements
var twit = require('twit');
var config = require('./../js/config.js');
var Twitter = new twit(config);


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

tweetTxt = 'hello world';
tweetNow(tweetTxt);


// var retweet = function() {
//   var parameters = {
//     q:  '#epicodus, #Epicodus, #epicodusStudent, #EpicodusStudent',
//     // result_type: 'recent',
//     // lang: 'en'
//   }
//
//   Twitter.get('search/tweets', parameters, function(err, data){
//     if (!err) {
//       console.log("data is " + data);
//       var retweetId = data.statuses[0].id_str;
//       Twitter.post('statuses/retweet/:id',
//       {
//         id: retweetId
//       },
//         function(err, response) {
//         if (response) {
//           console.log('Retweeted');
//         }
//         if (err) {
//           console.log('there was an error in retweet');
//         }
//       });
//     }
//     else {
//       console.log('error while searching');
//     }
//   });
// }
//
// retweet();
