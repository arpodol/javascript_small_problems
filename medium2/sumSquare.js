//Write a function that computes the difference between the square of the sum of
//the first n positive integers and the sum of the squares of the first n positive integers.

// Input: number
// returns the difference between the square of the sum of first n positive integers.

// Algorithim:
// Create variables to hold square of sums and sum of squares
// Itereate from 1 to number and for each
// square of sums += i
// sum of squares +=  i**2
// afterwards do square of sums ** 2 - sum of squares

function sumSquareDifference(num) {
  let sum = 0;
  let squares = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
    squares += i ** 2;
  }
  return (sum ** 2) - squares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
