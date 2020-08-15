
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

//Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// Input, number to be rotated and number of rightmost digits to be rotated.
// output, number rotated.

// Algorithim
// Split digit into array.
// Splice from end of array leftwards for number of digits to be rotated.
// Use rotate array function to get new array.
// Join this with the left over part of the input array.
// Join this back and convert to number

function rotateRightmostDigits(number, range) {
  let numArray = String(number).split('');
  let subArray = rotateArray(numArray.slice(-range));
  let consolidatedArray = numArray.slice(0, -range).concat(subArray);
  return Number(consolidatedArray.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
