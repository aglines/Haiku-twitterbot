const datamuse = require('datamuse');
var Bot = require('./../js/bot.js').botModule;
// var words = require('./../js/words_new.json');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var dictionary = JSON.parse('["one","winter","summer","spring","fall","autumn","garden","tree","plants","cherry","blossom","animals","dinosaur","green","sky","stars","lotus","wonder","gaze","sleep","sheep","pasture","fields","green","sky","stars","lotus","wonder","gaze","sleep","sheep","pasture","fields","on","in","on","in","a","of","the","about", "mountains", "love", "death", "revenge", "success", "fail", "bonsai", "frog", "lace", "curtains", "beware", "fate", "fortune"]');

// DIFFICULTY GETTING EXTERNAL JSON TO WORK
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


assembleHaiku5(0, []);
assembleHaiku7(0, []);
assembleHaiku5(0, []);

function assembleHaiku5(sentenceSyllables, sentence) {
  // FUNCTIONS USE RECURSIVE CALLS INSTEAD OF FOR loop
  // WHILE LOOP DOES NOT PLAY WELL WITH ASYNC CALLS
  //   Might try do / while
  //   because it will run once then eval at end
  
  // var sentence = [];
  // var sentenceSyllables = 0;
  // for (var i = 0 ; i < 5 ; i++) {
    // console.log("i is " + i);
    var newWord = getRandomWord(0, dictionary.length-1);
    datamuse.request('words?sp=' + newWord + '&md=s&max=1')
    .then((json) => {
      newWordSyllables = json[0].numSyllables;
      newWord = json[0].word;

      if (sentenceSyllables === 5) {
        var testSentence = capitalizeFirstLetter(sentence[0]);
        sentence.splice(0, 1, testSentence);
        var haiku5 = sentence.join(" ");
        console.log("haiku5 is " + haiku5);
        var newBot = new Bot();
        newBot.buildHaiku(haiku5);
        return sentence;
      }

      if ((sentenceSyllables < 5) && (sentenceSyllables + newWordSyllables <= 5)) {
        sentence.push(newWord);
        sentenceSyllables += newWordSyllables;
        console.log("sentenceSYlls is " + sentenceSyllables);
        assembleHaiku5(sentenceSyllables, sentence);
      } //else

      else if (sentenceSyllables === 4) {
        sentence.push('life');
        sentenceSyllables += 1;
        console.log("in else if sentenceSYlls is " + sentenceSyllables);
        assembleHaiku5(sentenceSyllables, sentence);
      }
    }); //this damn .then structure
  // }
}


function assembleHaiku7(sentenceSyllables, sentence) {
  // var sentence = [];
  // var sentenceSyllables = 0;
  // for (var i = 0 ; i < 7 ; i++) {
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
        assembleHaiku5(sentenceSyllables, sentence);
      } //else

      else if (sentenceSyllables === 6) {
        sentence.push('life');
        sentenceSyllables += 1;
        assembleHaiku5(sentenceSyllables, sentence);
      }
    }); //this damn .then structure
  // }
}
