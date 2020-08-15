//Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//If the input is not an array, return undefined.
//If the input is an empty array, return an empty array.
//Review the test cases below, then implement the solution accordingly.
// Input: array or anything else.
// Output: if not array, return undefined. If array, return new array with first element of original array moved to end of array.
// algoritim:
// check if input is array, if not return undefined.
// if input is array,create copy and then shift first element.
// Push that element to end and return copy.

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

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray([1,2,3,null]));  // [2,3,null,1]

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
