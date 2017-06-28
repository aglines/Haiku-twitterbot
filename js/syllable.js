const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;

  datamuse.request('words?sp=flower&md=s&max=1')
  .then((json) => {
      syllables = json[0].numSyllables;
      newWord = json[0].word;
      var currentSyllableCheck = new Bot();
      currentSyllableCheck.checkSyllables(newWord, syllables);
      console.log(newWord, syllables);
    });



// console.log("JSON dict length ", dictionary.length);

var dictionary = JSON.parse('["one", "two", "OK", "four"]');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

newRandomNumber = getRandomIntInclusive(1, dictionary.length-1);
console.log("new rand # " + newRandomNumber);
console.log(dictionary[newRandomNumber]);
