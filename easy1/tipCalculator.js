var bill;
var tipPercentage;
var tip;
bill = parseInt(prompt('What is the bill?'), 10);
tipPercentage = parseInt(prompt('What is the tip percentage?'), 10);
tip = bill * tipPercentage / 100;
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + bill).toFixed(2)}`)
