function runningTotal(arr) {
  var totalArr = [];
  var i;
  var sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    totalArr.push(sum);
  }
  return totalArr;
}

function runningTotalMap(arr) {
  var sum = 0;
  return arr.map(ele => sum += ele)
}


console.log(runningTotalMap([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalMap([3]));                    // [3]
console.log(runningTotalMap([]));                     // []
