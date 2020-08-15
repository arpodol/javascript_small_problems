//Lettercase Percentage Ratio
//Write a function that takes a string, and returns an object containing the following three properties:
//
//the percentage of characters in the string that are lowercase letters
//the percentage of characters that are uppercase letters
//the percentage of characters that are neither
//You may assume that the string will always contain at least one character.
//

//input string
// output, object containing percentage of upper, lower case and neither characters in the string.
// Algorithim:
// Create object to hold counts and total.
// For each character, check if upper, lower or neither and increment corresponding count as well as total.
// Afterwards, return object that contains counts/total counts.




function letterPercentages(string){
  let caseCount = {upper: 0, lower: 0, neither: 0, total: 0};
  for (i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-z]/)){
      caseCount.lower += 1;
    } else if (string[i].match(/[A-Z]/)){
      caseCount.upper += 1;
    } else {
      caseCount.neither += 1;
    }
    caseCount.total += 1;
  }
  let lowerPercentage = (100 * caseCount.lower / caseCount.total).toFixed(2);
  let upperPercentage = (100 * caseCount.upper / caseCount.total).toFixed(2);
  let neitherPercentage = (100 * caseCount.neither / caseCount.total).toFixed(2);

  return {lowercase: lowerPercentage, uppercase: upperPercentage, neither: neitherPercentage};
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
