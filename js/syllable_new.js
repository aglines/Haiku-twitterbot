const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;
// var words = require('./../js/words_new.json');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var dictionary = JSON.parse('["one","winter","summer","spring","fall","autumn","garden","tree","plants","cherry","blossom","animals","dinosaur","green","sky","stars","lotus","wonder","gaze","sleep","sheep","pasture","fields","green","sky","stars","lotus","wonder","gaze","sleep","sheep","pasture","fields","on","in","on","in","a","of","the","about", "mountains", "love", "hate", "death", "revenge", "success", "fail", "bonsai", "frog", "lace", "curtains", "beware", "fate", "fortune"]');

// var dictionary = JSON.parse(newWords);

//========================================
function getRandomWord(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  var newRandomWord = dictionary[randNum];
  return newRandomWord;
}
//========================================

assembleHaiku5();
assembleHaiku7();
assembleHaiku5();

function assembleHaiku5() {
  var sentence = [];
  var sentenceSyllables = 0;
  for (var i = 0 ; i < 5 ; i++) {
    var newWord = getRandomWord(0, dictionary.length-1);
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      newWordSyllables = json[0].numSyllables;
      newWord = json[0].word;
      if (sentenceSyllables === 5) {
        var testSentence = capitalizeFirstLetter(sentence[0]);
        sentence.splice(0, 1, testSentence);
        var haiku5 = sentence.join(" ");
        // console.log(haiku5);
        var newBot = new Bot();
        newBot.buildHaiku(haiku5);
        return sentence, sentenceSyllables;
      }

      if ((sentenceSyllables < 5) && (sentenceSyllables + newWordSyllables <= 5)) {
        sentence.push(newWord);
        sentenceSyllables += newWordSyllables;
      } //else

      else if (sentenceSyllables === 4) {
        sentence.push('life');
        sentenceSyllables += 1;
      }
    }); //this damn .then structure
  }
}


function assembleHaiku7() {
  var sentence = [];
  var sentenceSyllables = 0;
  for (var i = 0 ; i < 7 ; i++) {
    var newWord = getRandomWord(0, dictionary.length-1);
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      newWordSyllables = json[0].numSyllables;
      newWord = json[0].word;
      if (sentenceSyllables === 7) {
        var testSentence = capitalizeFirstLetter(sentence[0]);
        sentence.splice(0, 1, testSentence);
        var haiku5 = sentence.join(" ");
        var newBot = new Bot();
        newBot.buildHaiku(haiku5);
        return sentence, sentenceSyllables;
      }

      if ((sentenceSyllables < 7) && (sentenceSyllables + newWordSyllables <= 7)) {
        sentence.push(newWord);
        sentenceSyllables += newWordSyllables;
      } //else

      else if (sentenceSyllables === 6) {
        sentence.push('life');
        sentenceSyllables += 1;
      }
    }); //this damn .then structure
  }
}
