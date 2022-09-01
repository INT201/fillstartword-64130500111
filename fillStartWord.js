const { template } = require('@babel/core')


function fillStartWord(startWord, word) {

  if(word == null || undefined){
    return undefined
  }else if (startWord === word.substr(0,startWord.length)){
    console.log(word);
  }else{
    console.log(`${startWord}${word}`)
  }


}

fillStartWord('1-2565-', 'Hello World')
fillStartWord('JS', 'beginner')
fillStartWord('first', 'firststep')
fillStartWord('second', undefined)
fillStartWord('third', null)

module.exports = fillStartWord
