//A triangle is classified as follows:
//
//Equilateral: All three sides are of equal length.
//Isosceles: Two sides are of equal length, while the third is different.
//Scalene: All three sides are of different lengths.
//To be a valid triangle, the sum of the lengths of the two shortest sides must
//be greater than the length of the longest side, and every side must have a
//length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.
//
//Write a function that takes the lengths of the three sides of a triangle as
//arguments, and returns one of the following four strings representing the
//triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// input: three numbers representing length of triangles.
// output: string representing type of triangle/ if invalid.

// Algorithim:
// Check if any sides are zero or if largest length is greater than the other 2 combined.
// If so, return invalid.
// Check if all sides equal, return equilateral.
// If all sides not equal return scalene.
// Else return isoceles.

function triangle(side1, side2, side3) {
  let sideArray = [side1, side2, side3].sort();
  let max = sideArray[2];
  let middle = sideArray[1];
  let min = sideArray[0];

  if (min === 0 || min + middle < max) {
    return 'invalid';
  } else if (min === max) {
    return 'equilateral';
  } else if (middle !== min && middle !== max) {
    return 'scalene';
  } else {
    return 'isoceles';
  }
  return sideArray;
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
