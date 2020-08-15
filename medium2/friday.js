//Write a function that takes a year as an argument, and returns the number of
//'Friday the 13ths' in that year. You may assume that the year is greater than
//1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
//You may also assume that the same calendar will remain in use for the foreseeable future.


// input: year as numbers
// output: number of friday the 13ths.

// Algorithim.
// Create a date object with the year and set sum to 0/
// Iterate through for each month.
// For each month, check if 13th is a friday, if so add to sum.
// return sum.


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

function fridayThe13ths(year){
  let date = new Date(`January 13, ${year}`);
  let total = 0;
  for (let i = 0; i <= 11; i += 1) {
    date.setMonth(i);
    date.setDate(13);
    if (date.getDay() === 5) {
      total += 1;
    }
  }
  return total;
}
