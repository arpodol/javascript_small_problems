function letterCaseCount(string){
  let caseCount = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').map(character => {
    if (character.match(/[a-z]/)) {
      caseCount.lowercase += 1;
    } else if (character.match(/[A-Z]/)) {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  })
  return caseCount;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
