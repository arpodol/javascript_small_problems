function crunch(string) {
  var returnString = '';
  var i;
  var currentLetter;

  for (i = 0; i < string.length; i += 1) {
    if (currentLetter === string[i]) {
      continue
    } else {
      currentLetter = string[i];
      returnString += string[i];
    }
  }
  return returnString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
