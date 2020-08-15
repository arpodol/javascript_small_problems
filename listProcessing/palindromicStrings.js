function palindromes(phrase){

  return substrings(phrase).filter(subStr => isPalindrome(subStr));
}


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

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}




console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
