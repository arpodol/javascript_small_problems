//The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

//Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

//plaintext: Pineapples don't go on pizzas!
//keyword: meat

//Applying the Vigenere Cipher for each alphabetic character:
//plaintext : Pine appl esdo ntgo onpi zzas
//shift     : meat meat meat meat meat meat
//ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

//result: Bmnxmtpeqw dhz'x gh ar pbldal!

// input: string, cipher word.
// Output: encoded string.
// Algorithim:
// Itereate through string:
// For each char, if a-zA-Z, shift using keyword. Then increment active letter of keyword
// IF active letter of key is greater than key size, go back to 0.
// Continue to do so through string and then output string.

function vignere(string, key){
  let keyIndex = 0;
  let outputString = '';
  let keyChar = key.split('').map(char => char.toLowerCase().charCodeAt(0) - 97);

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-z]/)) {
      outputString += shiftChar(string[i], 97, keyChar[keyIndex]);
      keyIndex += 1;
    } else if (string[i].match(/[A-Z]/)) {
      outputString += shiftChar(string[i], 65, keyChar[keyIndex]);
      keyIndex += 1;
    } else {
      outputString += string[i];
    }

    keyIndex = keyIndex === key.length ? 0 : keyIndex;
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

vignere("Pineapples don't go on pizzas!", 'meat');
vignere("Pineapples don't go on pizzas!", 'MeAt');
vignere("Pineapples don't go on pizzas!", 'Aa');
//result: Bmnxmtpeqw dhz'x gh ar pbldal!
