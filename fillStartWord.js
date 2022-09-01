const { template } = require('@babel/core')


function fillStartWord(startWord, word) {
  if(word == null || word == undefined){
    return undefined
  }else if(startWord == word.substr(0, startWord.lenth)){
    return word
  }else{
    return `${startWord}${word}`
  }
}
    
  




// fillStartWord('1-2565-', 'Hello World')
// fillStartWord('JS', 'beginner')
// fillStartWord('first', 'firststep')
// fillStartWord('second', undefined)
// fillStartWord('third', null)

module.exports = fillStartWord
