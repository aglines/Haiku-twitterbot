const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;

var dictionary = JSON.parse('["one", "seven", "twenty", "two", "three", "four", "pant", "bird", "walk"]');

//========================================
function getRandomWord(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  var newRandomWord = dictionary[randNum];
  return newRandomWord;
}
//========================================

assembleHaiku();

function assembleHaiku() {
  var haikuSentence = [];
  var haikuSentenceSyllables = 0;
  for (i = 0 ; i < 5 ; i++) {
    var newWord = getRandomWord(0, dictionary.length-1);
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      newHaikuWordSyllables = json[0].numSyllables;
      newHaikuWord = json[0].word;
      console.log("new word = " + newHaikuWord);
      console.log("syllalbes in new word = " + newHaikuWordSyllables);
      if ((newHaikuWordSyllables + haikuSentenceSyllables) < 5) {
        haikuSentence.push(newHaikuWord);
        console.log("Total sentence : " + haikuSentence);
        haikuSentenceSyllables += newHaikuWordSyllables;
        console.log("# syllables in sentence : " + haikuSentenceSyllables);
      }
      else {
        return haikuSentence;
        console.log("total sent in else loop" + haikuSentence);
      }
    });
    if (haikuSentenceSyllables = 5){
      var currentSyllableCheck = new Bot();
      console.log("ENDING haikuSentence: " + haikuSentence);
      currentSyllableCheck.tweet(haikuSentence, haikuSentenceSyllables);
    }
  }
}


//TWEET METHOD TO BE USED LATER
