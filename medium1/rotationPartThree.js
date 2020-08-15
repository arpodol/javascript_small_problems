//Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

//Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Input Number
// output: maximum rotation of number.

// Algorithim:
// For length i of digit:
// call rotateRightmostDigits of number from i to end of array.
// At end of iteration, return number.





function maxRotation(number) {
  let rotatedNumber = number;
  let length = String(number).length;
  for (let i = 0; i < length; i += 1) {
    rotatedNumber = rotateRightmostDigits(rotatedNumber, length - i);
  }
  return rotatedNumber;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845



function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  } else {
    let rotatedArray = array.slice();
    rotatedArray.push(rotatedArray.shift());
    return rotatedArray;
  }
}

function rotateRightmostDigits(number, range) {
  let numArray = String(number).split('');
  let subArray = rotateArray(numArray.slice(-range));
  let consolidatedArray = numArray.slice(0, -range).concat(subArray);
  return Number(consolidatedArray.join(''));
}
