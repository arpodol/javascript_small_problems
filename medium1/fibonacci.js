// Input Number
// return fibonacci number corresponding to that

//Algorithim
// If num is 1 or 2, return 1
// If num is greater return fibonacci(n - 1) + fibonacci(n - 2 )
function fibonacci(num) {
  if (num > 2) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  } else {
    return 1;
  }
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
