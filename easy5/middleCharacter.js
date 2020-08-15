function centerOf(str) {
  var middle = Math.floor(str.length/2);
  if (str.length % 2 === 0) {
    return str.slice(middle - 1, middle + 1)
  } else {
    return str.slice(middle, middle + 1);
  }

}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
