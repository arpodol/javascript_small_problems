function asciiValue(string) {
  var sum = 0;
  var i;
  for (i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  return sum;
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
