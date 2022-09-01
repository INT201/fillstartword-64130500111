const { template } = require('@babel/core')


// function fillStartWord(startWord, word) {
//   if(word == null || word == undefined){
//     console.log(undefined)
//   }else if(startWord == word.substr(0, startWord.lenth)){
//     console.log(word)
//   }else{
//     console.log(startWord+word)
//   }
// }
function fillStartWord(startWord, word) {
  let fullWord;
  if (word == null||word == undefined) {
      fullWord = undefined;
      return fullWord;
  } else if (startWord === word.substr(0, startWord.length)) {
      fullWord = word;
      return fullWord;
  }
  else {
      fullWord = startWord + word;
      return fullWord;
  }
}
    
  




fillStartWord('1-2565-', 'Hello World')
fillStartWord('JS', 'beginner')
fillStartWord('first', 'firststep')
fillStartWord('second', undefined)
fillStartWord('third', null)

module.exports = fillStartWord
