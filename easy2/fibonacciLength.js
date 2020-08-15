function findFibonacciIndexByLength(digitLength) {
  var index = 2;
  var int1 = 1;
  var int2 = 1;
  while (true) {
    if (int2.toString().length === digitLength) {
      return index;
    } else {
      [int1, int2] = [int2, int2 + int1]
      index += 1;
    }
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
