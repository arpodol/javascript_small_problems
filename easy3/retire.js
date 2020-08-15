var currentAge = prompt('What is your age?');
var retireAge = prompt('At age would you like to retire?');
var year = new Date().getFullYear();
var diff = retireAge - currentAge;

console.log(`It's ${year}. You will retire in ${year + diff}.`)
console.log(`You have only ${diff} years of work to go!`)
