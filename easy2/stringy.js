function stringy(integer){
  var outputString = '';
  var i;
  var subString;
  for (i = 0; i < integer; i += 1){
    subString = i % 2 === 0 ? '1' : '0';
    outputString += subString;
  }
  return outputString;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
