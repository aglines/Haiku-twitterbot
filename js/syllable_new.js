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
  //INIT VARS
  var sentence = [];
  var sentenceSyllables = 0;
  //FOR LOOP
  for (i = 0 ; i < 5 ; i++) {
    //GET RANDOM WORD FROM DICT
    var newWord = getRandomWord(0, dictionary.length-1);
    //API REQUEST
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      //GRAB THE DATA WE WANT - WORD, SYLLS
      newWordSyllables = json[0].numSyllables;
      newWord = json[0].word;
      // console.log("new word = " + newWord);
      // console.log("syllalbes in new word = " + newWordSyllables);
      if ((sentenceSyllables < 5) && (sentenceSyllables + newWordSyllables <= 5)) {
        sentence.push(newWord);
        console.log("Haiku sentence so far : " + sentence);
        sentenceSyllables += newWordSyllables;
        console.log("current syllables in sentence : " + sentenceSyllables);
      }

      else if (sentenceSyllables == 5) {
        console.log("Haiku sentence at 5 sylls = " + sentence);
        return sentence, sentenceSyllables;
      } //else
    }); //this damn .then structure
    var currentSyllableCheck = new Bot();
    currentSyllableCheck.tweet(sentence, sentenceSyllables);
  }
}
