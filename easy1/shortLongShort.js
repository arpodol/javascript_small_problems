function shortLongShort(firstString, secondString) {
  var longString;
  var shortString;
  [longString, shortString] = firstString.length < secondString.length ?
    [secondString, firstString] : [firstString, secondString];
  return shortString + longString + shortString;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
