// input number
// output corresponding fibonacci number.

// algoritim:
// create array to hold fibonacci numbers.
//
// Put in two 1's into array and start iterating up to num.
// calculate next number by adding two prior numbers. Push into array.
// return fibonacci array at index of num - 1.


function fibonacci(num) {
  let fibonacciArray = [1, 1];
  for (let i = 2; i < num; i += 1) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
  return fibonacciArray[num - 1]
}




console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
