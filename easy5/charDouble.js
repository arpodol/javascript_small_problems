function repeater(str) {
  var repeatStr = '';
  str.split('').forEach(ele => repeatStr = repeatStr + ele + ele)
  return repeatStr;
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
