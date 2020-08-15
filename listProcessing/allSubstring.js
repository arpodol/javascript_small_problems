function substringsAtStart(string){
  return string.split('').map((_, index) => string.substring(0, index + 1));
}

function substrings(string){
  let substringArray = [];
  string.split('').forEach((_, index) => {
    substringArray = substringArray.concat(substringsAtStart(string.slice(index)));
  })
  return substringArray;
}



console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
