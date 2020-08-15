var numbers = [];
var num;

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));
num = prompt('Enter the last number');


if (numbers.includes(num)) {
  console.log(`The number ${num} appears in [${numbers.join(',')}].`)
} else {
  console.log(`The number ${num} does not appear in [${numbers.join(',')}].`)
}
