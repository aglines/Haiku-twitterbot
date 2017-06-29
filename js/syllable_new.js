const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// var dictionary = JSON.parse('["seven", "twenty", "thirty", "forty", "fifty", "one"]');
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
  var sentence = [];
  var sentenceSyllables = 0;
  for (var i = 0 ; i < 5 ; i++) {
    var newWord = getRandomWord(0, dictionary.length-1);
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      newWordSyllables = json[0].numSyllables;
      newWord = json[0].word;
      if (sentenceSyllables == 5) {
        console.log("Haiku sentence at 5 sylls = " + sentenceSyllables);
        console.log("haiku at 5 = " + sentence);
        var testSentence = capitalizeFirstLetter(sentence[0]);
        sentence.splice(0, 1, testSentence);
        var haiku5 = sentence.join(" ");
        console.log(haiku5);
        var currentSyllableCheck = new Bot();
        currentSyllableCheck.tweet(haiku5, sentenceSyllables);
        // return sentence, sentenceSyllables;
      }

      if ((sentenceSyllables < 5) && (sentenceSyllables + newWordSyllables <= 5)) {
        sentence.push(newWord);
        console.log("Haiku sentence so far : " + sentence);
        sentenceSyllables += newWordSyllables;
        console.log("current syllables in sentence : " + sentenceSyllables);
      } //else

      else if (sentenceSyllables == 4) {
        sentence.push('FIN!');
        sentenceSyllables += 1;
      }

    }); //this damn .then structure
  }
}
