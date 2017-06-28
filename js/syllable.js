const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;


var dictionary = JSON.parse('["one", "seven", "twenty", "unmitigated"]');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//========================================

var newRandomNumber = getRandomIntInclusive(1, dictionary.length-1);
var newRandomWord = dictionary[newRandomNumber];
console.log("newRandomWord = " + newRandomWord);


// wordRequest = "\'words?sp=" + newRandomWord + "&md=s&max=1\'";
// console.log("wordRequest = " + wordRequest);



  datamuse.request('words?sp=' + newRandomWord + '&md=s&max=1')
  .then((json) => {
      syllables = json[0].numSyllables;
      newWord = json[0].word;
      var currentSyllableCheck = new Bot();
      currentSyllableCheck.checkSyllables(newWord, syllables);
      console.log("newWord is " + newWord + " and syll# is ", syllables);
    });
