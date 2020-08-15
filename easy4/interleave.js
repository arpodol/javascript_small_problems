function interleave(arr1, arr2) {
  var interArr = [];
  var i;
  for (i = 0; i < arr1.length; i += 1) {
    interArr.push(arr1[i],arr2[i]);
  }
  return interArr;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
