function sequence(count, start) {
  var outputArr = [];
  var i;
  
  for (i = 1; i <= count; i += 1){
    outputArr.push(i * start);
  }
  return outputArr;

}



console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
