//Diamonds
//Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
//
//Examples:
//
//diamond(1);
//// logs
//*
//diamond(3);
//// logs
// *
//***
// *
diamond(9);
diamond(3);
diamond(1);
//// logs
//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

//input number of max Diamonds
//output strings in the shape of a Diamonds
//
// Algorithim
// calculate number of space characters needed for each line and number of stars
// for spaces: floor(diamondMax/2)-n
// stars = 2n+1
// Create array for space count and array for star count based on those.
// then iterate through array and print out characters then reverse back through.

function diamond(diamondMax) {
  let diamondArr = [];
  let spaceArr = [];
  for (let i = 0; i < Math.round(diamondMax/2); i += 1) {
    diamondArr.push(2 * i + 1);
    spaceArr.push((Math.floor(diamondMax/2)) - i);
  }
  for (let i = 0; i < Math.round(diamondMax/2); i += 1) {
    console.log(' '.repeat(spaceArr[i]) + '*'.repeat(diamondArr[i]));
  }
  for (let i = Math.round(diamondMax/2) - 2; i >= 0 ; i -= 1) {
    console.log(' '.repeat(spaceArr[i]) + '*'.repeat(diamondArr[i]));
  }
}


function hollowDiamond(diamondMax) {
  let innerSpaceArr = [0];
  let spaceArr = [Math.floor(diamondMax/2)];
  let caps = ' '.repeat(Math.floor(diamondMax/2)) + '*';
  for (let i = 1; i < Math.round(diamondMax/2); i += 1) {
    innerSpaceArr.push(2 * i - 1);
    spaceArr.push((Math.floor(diamondMax/2)) - i);
  }

  console.log(caps);
  for (let i = 1; i < Math.round(diamondMax/2); i += 1) {
    console.log(' '.repeat(spaceArr[i]) + '*' + ' '.repeat(innerSpaceArr[i]) + '*');
  }
  for (let i = Math.round(diamondMax/2) - 2; i > 0 ; i -= 1) {
    console.log(' '.repeat(spaceArr[i]) + '*' + ' '.repeat(innerSpaceArr[i]) + '*');
  }
  console.log(caps);
}

hollowDiamond(9)
