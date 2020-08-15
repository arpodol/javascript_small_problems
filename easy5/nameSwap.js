function swapName(str) {
  var strArr = str.split(' ');
  var firstNames = strArr.slice(0, -1).join(' ');
  var lastName = strArr.slice(-1).join('');
  return lastName + ', ' + firstNames;
}

console.log(swapName('Joe Joey Roberts'));    // "Roberts, Joe"
