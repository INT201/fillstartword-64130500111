const { template } = require('@babel/core')


function fillStartWord(startWord, word) {

  if((startWord != null || undefined) && (word != null || undefined)) {
    console.log(`${startWord}${word}`)
    
  }else {
    return undefined
    
  }

}

// fillStartWord('1-2565-', 'Hello World')
// fillStartWord('JS', 'beginner')
// fillStartWord('first', 'firststep')
// fillStartWord('second', undefined)
// fillStartWord('third', null)

module.exports = fillStartWord
