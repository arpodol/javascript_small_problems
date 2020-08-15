function isPalindromicNumber(num) {
  //return isPalindrome(String(num));
  console.log(String(num));
}

function isPalindrome(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
