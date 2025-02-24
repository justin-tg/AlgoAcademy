
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

  // O(n)

  // the input string could be of infinite length
  for (const letter of text) {
    charCount[letter] = (charCount[letter] || 0) + 1;
  }


  // text
  // a
  // akabi
  // advyuavida

  // as you approach infinity --> infinity MAX Len is 26 

  // the charCount MAX is 26

  // O(1)
  for (const char of charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;

}


// Optimized with Map

function findNonRepeatingCharacter(text) {
  if (!text.length) return null;
  if (text.length === 1) return text;

  text = text.toLowerCase();
  let charCount = new Map();

  // Single loop for counting characters
  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate over map keys (not O(n), since unique characters are limited)
  for (const [char, count] of charCount) {
    if (count === 1) return char;

    //if the index of s is before t
    // then set result to s
  }

  return null;
}



// Optimized using a queue

function findNonRepeatingCharacter(text) {
  if (!text.length) return null;
  if (text.length === 1) return text;

  text = text.toLowerCase();
  let charCount = new Map();
  let queue = [];

  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1);

    if (charCount.get(char) === 1) {
      queue.push(char); // Add new characters to the queue
    }

    while (queue.length && charCount.get(queue[0]) > 1) {
      queue.shift(); // Remove repeating characters
    }
  }

  return queue.length ? queue[0] : null;
}
