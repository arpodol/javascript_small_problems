function doubleConsonants(str) {
  var repeatStr = '';
  str.split('').forEach(function(ele) {
    if (isMultiplyCharacter(ele)) {
      repeatStr = repeatStr + ele + ele
    } else {
      repeatStr += ele;
    }

  })
  return repeatStr;
}

function isMultiplyCharacter(char){
  return /[b-df-hj-np-tv-z]/.test(char.toLowerCase());
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
