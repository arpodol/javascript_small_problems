function countOccurrences(arr){
  counts = {};
  arr.forEach(function(ele) {
    counts[ele] = counts[ele] || 0;
    counts[ele] += 1;
  })

  for (obj in counts) {
    console.log(`${obj} => ${counts[obj]}`)
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
