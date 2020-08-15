function halvsies(arr) {
  var firstArr = [];
  var secondArr = [];
  var i;
  var half = Math.ceil(arr.length/2);
  for (i = 0; i < arr.length; i += 1) {
    if (i < half) {
      firstArr.push(arr[i]);
    } else {
      secondArr.push(arr[i]);
    }
  }
  return [firstArr, secondArr];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
