const { template } = require('@babel/core')


function fillStartWord(startWord, word) {

  if(startWord != null && word != null) {
    console.log(`${startWord}${word}`)
    
  }else {
    
    console.log("undefined")
  }

}

fillStartWord("hello")

module.exports = fillStartWord
