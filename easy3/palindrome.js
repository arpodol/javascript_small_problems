function isPalindrome(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

function isRealPalindrome(str) {
  return isPalindrome((str.replace(/[\W]/g, '')).toLowerCase());
}

//console.log(isPalindrome('madam'));               // true
//console.log(isPalindrome('Madam'));               // false (case matters)
//console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
//console.log(isPalindrome('356653'));              // true


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
