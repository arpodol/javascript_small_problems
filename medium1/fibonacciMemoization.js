// Input Number
// return fibonacci number corresponding to that

//Algorithim
// Create object to house values for fibonacci. Populate with first two numbers.
// Prior to running next level of recursion, check if in object. If not, run fibonacci. If so, just pull value.
// After getting value, push into object then return value.
// If num is 1 or 2, return 1
// If num is greater return fibonacci(n - 1) + fibonacci(n - 2 )
//
var fibonacciObj = {1:1, 2:1};
require('performance')

function fibonacci(num) {
  if (num > 2) {
    if (fibonacciObj[num]) {
      return fibonacciObj[num];
    } else {
      let fibNum = fibonacci(num - 1) + fibonacci(num - 2);
      fibonacciObj[num] = fibNum;
      return fibNum;
    }
  } else {
    return fibonacciObj[num];
  }
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765


var t0 = performance.now();
console.log(fibonacci(23));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
