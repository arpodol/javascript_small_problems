function wordSizes(words) {
  var wordObj = {};
  var length;
  words.split(' ').forEach(function(word){
    length = word.replace(/[\W]/g, '').length;
    if (length === 0) {
      return;
    }
    wordObj[length] = wordObj[length] || 0;
    wordObj[length] += 1;
  })
  return wordObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
