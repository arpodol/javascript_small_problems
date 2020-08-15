var integer;
var sequenceArray = [];
var operation;
var i;
var result;

integer = parseInt(prompt('Please enter an integer greater than 0:'), 10);
operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.')

for (i = 1; i <= integer; i += 1) {
  sequenceArray.push(i);
}

if (operation === 'p') {
  result = sequenceArray.reduce((acc, element) => acc * element, 1);
  console.log(`The product of the integers between 1 and ${integer} is ${result}.`)
} else if (operation === 's') {
  result = sequenceArray.reduce((acc, element) => acc + element, 0);
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`)
} else {
  console.log('You did not pick a valid operation.')
}
