// const { template } = require('@babel/core')


function fillStartWord(startWord, word) {

  if((startWord != null || undefined) && (word != null || undefined)) {
    console.log(`${startWord}${word}`)
    
  }else {
    
    console.log("undefined")
  }

}

// fillStartWord("hello", "1 2 3")
// fillStartWord("hello", null)
// fillStartWord("hello", undefined)
// fillStartWord(null, null)
// fillStartWord(undefined)

// module.exports = fillStartWord
