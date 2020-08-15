function twice(integer) {
  if (integer.toString().length % 2 === 0 && isDoubleNum(integer)) {
    return integer;
  } else {
    return integer * 2;
  }
}

function isDoubleNum(integer) {
  var string1;
  var string2;
  var intStr = integer.toString();
  string1 = intStr.slice(0, (intStr.length/2));
  string2 = intStr.slice((intStr.length/2), intStr.length);
  return string1 === string2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
