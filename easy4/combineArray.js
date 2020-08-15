function union(arr1, arr2) {
  var unionArr = [];
  Array.from(arguments).forEach(function(array) {
    array.forEach(function(ele) {
      if(!unionArr.includes(ele)){
        unionArr.push(ele);
      }
    })
  })
  return unionArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
