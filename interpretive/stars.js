//Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Input odd number
// output, 8 pointed star.

// Examples
star(7);
// logs
//*  *  *
// * * *
//  ***
//*******
//  ***
// * * *
//*  *  *

star(9);
//*   *   *
// *  *  *
//  * * *
//   ***
//*********
//   ***
//  * * *
// *  *  *
//*   *   *

//Algothim: For Floor(n/2) lines, comput number of leading whitespace and space in between stars.
// leading whitespace = (i)
// Space between stars = Floor(n/2) - i - 1
// print middle number stars and go back through Array

function star(num) {
  let leadCount = Math.floor(num/2);
  let leadSpaceArr = [];
  let joinSpaceArr = [];
  let starArray = ['*', '*', '*'];
  for (let i = 0; i < leadCount; i += 1) {
    leadSpaceArr.push(i);
    joinSpaceArr.push(leadCount - i - 1);
  }

  console.log(leadSpaceArr);
  console.log(joinSpaceArr);
  for (let i = 0; i < leadSpaceArr.length; i += 1) {
    let string = ' '.repeat(leadSpaceArr[i]) + starArray.join(' '.repeat(joinSpaceArr[i]));
    console.log(string);
  }
  console.log('*'.repeat(num));
  for (let i = leadSpaceArr.length - 1; i >= 0 ; i -= 1) {
    let string = ' '.repeat(leadSpaceArr[i]) + starArray.join(' '.repeat(joinSpaceArr[i]));
    console.log(string);
  }
}
