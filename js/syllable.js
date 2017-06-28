const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;

// create object outside the stuff
// create property that you want outside the stuff
// inside the stuff, reference it with this.




  datamuse.request('words?sp=flower&md=s&max=1')
  .then((json) => {
      syllables = json[0].numSyllables;
      newWord = json[0].word;
      var currentSyllableCheck = new Bot();
      currentSyllableCheck.checkSyllables(newWord, syllables);
      console.log(newWord, syllables);
    });

//
// WordToTweet();
// console.log(WordToTweet());

// WordToTweet.exports = {
//   tweetWord: newWord,
//   tweetSyllables:  syllables
// }
