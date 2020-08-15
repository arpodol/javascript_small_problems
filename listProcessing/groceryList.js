function buyFruit(groceryList){
  let summedList = [];
  groceryList.forEach(pair => {
    times(pair[1], _ => summedList.push(pair[0]));
  })
  return summedList;
}

function times(integer, iterator) {
  for (let i = 0; i < integer; i += 1) {
    iterator();
  }
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
