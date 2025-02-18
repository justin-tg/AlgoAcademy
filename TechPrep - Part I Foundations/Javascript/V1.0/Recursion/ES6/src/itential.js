
// 1. Repeating Characters
// Write a function that returns the first non-repeating character in a string. If all characters repeat, return null.
 
// Examples:
 
 
// Input = ‘abcacd’
// Output = 'b’
// Input = 'abcabc'
// Output = null


function findNonRepeatingCharacter(text) {

  if (!text.length) {
    return null;
  }

  if (text.length === 1) {
    return text;
  }

  text = text.toLowerCase();

  let charCount = new Map();

  for (const letter of text) {
    charCount[letter] = (charCount[letter] || 0) + 1;
  }

  for (const char of text) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;

}