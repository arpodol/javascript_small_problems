//A triangle is classified as follows:

//Right: One angle is a right angle (exactly 90 degrees).
//Acute: All three angles are less than 90 degrees.
//Obtuse: One angle is greater than 90 degrees.
//To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

//Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

//You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
//input 3 angles
// output, type of triangle

// algorithim:
// Sort angles in array and grab max and min.
// If min is 0 or less, or sum !== 180, return invalid
// If any angle is 90, return 'right'
// If max > 90, return 'obtuse'
// Else acute.

function triangle(angle1, angle2, angle3) {
  let angleArray = [angle1, angle2, angle3].sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  if (angleArray[0] <= 0 || angleArray.reduce((acc, ele) => acc + ele) !== 180) {
    return 'invalid';
  } else if (angleArray.includes(90)) {
    return 'right';
  } else if(angleArray[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }

}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
