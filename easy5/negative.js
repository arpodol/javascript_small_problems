function negative(int) {
  return (int < 0) ? int : int * -1;
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
