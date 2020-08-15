function swap(string) {
  var wordArr = string.split(' ').slice();
  var reverseArr = wordArr.map(word => swapFirstLast(word));
  return reverseArr.join(' ');
}

function swapFirstLast(word) {
  var wordArr = word.split('');
  var firstLetter = wordArr[0];
  var lastLetter = wordArr[wordArr.length - 1]
  if (word.length === 1) {
    return word;
  } else {
    wordArr[0] = lastLetter;
    wordArr[wordArr.length - 1] = firstLetter;
  }
  return wordArr.join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
