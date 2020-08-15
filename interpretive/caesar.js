//Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

//The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// Algorithim
// Iterate through string and for each char:
// if /[a-z]/ convert to char code, subtract such that 'a' === 0, add the shift.
// Modulo against 26 to allow wraparound then add back the 'a' char code and convert back to letter.
// Do same for if [A-Z] but use different offset for 'A'.
//If something else, don't do anything, just shove into output string.
// print string/

function caesarEncrypt(string, offset) {
  let outputString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-z]/)) {
      outputString += shiftChar(string[i], 97, offset);
    } else if (string[i].match(/[A-Z]/)) {
      outputString += shiftChar(string[i], 65, offset);
    } else {
      outputString += string[i];
    }
  }
  console.log(outputString);
}

function shiftChar(string, basis, shift) {
  let char = string.charCodeAt(0);
  char -= basis;
  char += shift;
  char %= 26;
  char += basis;
  return String.fromCharCode(char);
}


// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
