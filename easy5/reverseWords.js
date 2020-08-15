function reverseWords(sentence) {
  var reverseArr = sentence.split(' ').map(function(word) {
    if (word.split('').length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return reverseArr.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
