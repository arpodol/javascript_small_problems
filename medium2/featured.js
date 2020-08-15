//A featured number (something unique to this exercise) is an odd number that is a
//multiple of 7, with all of its digits occuring exactly once each. For example,
//49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not
//a multiple of 7), and 133 is not (the digit 3 appears twice).
//
//Write a function that takes an integer as an argument, and returns the next
//featured number greater than the integer. Issue an error message if there is no
//next featured number.
//
//NOTE: The largest possible featured number is 9876543201.

// input: number
// output: next featured number

// Algorithim
// starting at number after input, iterate:
// check if number is divisble by 7, is odd and doesnt have its digits repeat.
// If not any of those, move to next number.
// If it is, return number

function featured(number) {
  for (i = number + 1; i < 9876543211 ;i += 1) {
    if (i % 7 === 0 && i % 2 === 1 && isUnique(i)) {
      return i;
    }
  }
  return "There is no next featured number"
}

function isUnique(num){
  let numberCount = {};
  let numberArr = String(num).split('');
  for (let i = 0; i < numberArr.length; i += 1) {
    if (numberCount[numberArr[i]]) {
      return false;
    } else {
      numberCount[numberArr[i]] = 1;
    }
  }
  return true;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
