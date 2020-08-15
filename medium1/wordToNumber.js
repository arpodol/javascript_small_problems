



//Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Input String
// output String with all the number words swapped to integers.

// Algorithim: Map through words, if number word, swap in integer.
//  join string(' ')


function wordToDigit(string) {
  let regex = /(zero|one|two|three|four|five|six|seven|eight|nine)/i;

  let wordObject = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine' : '9'
  }

  return string.split(' ').map(word => {
    let found = word.match(regex);
    if (found) {
      return word.replace(found[0], wordObject[found[0]]);
    } else {
      return word;
    }
  }).join(' ')
}



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
