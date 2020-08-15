function multiplyAllPairs(array1, array2) {
  let pairArray = [];

  array1.forEach(element1 => {
    array2.forEach(element2 => {
      pairArray.push(element1 * element2);
    })
  });
  return pairArray.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
