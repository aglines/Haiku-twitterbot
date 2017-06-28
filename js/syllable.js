// const datamuse = require('datamuse');
// var Bot = require('./../js/bot.js').botModule;
//
//
//
//
// var dictionary = JSON.parse('["one", "seven", "twenty"]');
//
//
//
// //========================================
// function getRandomWord(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   randNum = Math.floor(Math.random() * (max - min + 1)) + min;
//   var newRandomWord = dictionary[randNum];
//   return newRandomWord;
// }
// //========================================
//
// assembleHaiku();
//
// function assembleHaiku() {
//   var haikuSentence = [];
//   var haikuSentenceSyllables = 0;
//   console.log("sentence = " + haikuSentence);
//
//   while (haikuSentenceSyllables < 5) {
//
//     var newWord = getRandomWord(0, dictionary.length-1);
//     console.log("new word = " + newWord);
//
//     datamuse.request('words?sp=' + newWord + '&md=s&max=1')
//     .then((json) => {
//       newHaikuWordSyllables = json[0].numSyllables;
//       newHaikuWord = json[0].word;
//       console.log("new word = " + newHaikuWord);
//       console.log("syll of new word = " + newHaikuWordSyllables);
//       if ((newHaikuWordSyllables + haikuSentenceSyllables) < 5) {
//         haikuSentence.push(newHaikuWord);
//         console.log("sentenece is now " + haikuSentence);
//         haikuSentenceSyllables += newHaikuWordSyllables;
//         console.log("sylls of sentence are now" + haikuSentenceSyllables);
//       }  // if
//       else {
//         return haikuSentence;
//         console.log("total sent in else loop" + haikuSentence);
//       } //else
//     });  //then/json
//     console.log(haikuSentenceSyllables);
//   }  // if or while loop
//
// }  // function
//
//
// //TWEET METHOD TO BE USED LATER
// // var currentSyllableCheck = new Bot();
// // currentSyllableCheck.tweet(assembledHaiku);
