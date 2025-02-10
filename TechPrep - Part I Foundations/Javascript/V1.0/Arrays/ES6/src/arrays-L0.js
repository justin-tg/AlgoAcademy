"use strict";


let L0 = function() {

  // #1 Generate a Range I
  //
  // Generate an array with the range of numbers from -100 to 72 using a for loop and return
  //  the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) the return statement allocated O(n) space for the result array
  // What is the time it took to you complete this solution?  : 1min
  this.generateRange1 = () => {
    
    const res = [];

    for (let i = -100; i <= 72; i++) {
      res.push(i);
    }

    return res;

  };


  // #2 Generate a Range II
  //
  // Generate an array with the range of numbers from -24 to 118 using a while loop and return
  //  the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) -- the return statement allocated O(n) space for the res array
  // What is the time it took to you complete this solution?  : 1min
  this.generateRange2 = () => {
    const res = [];

    let i = -24;

    while (i <= 118) {
      res.push(i);
      i++;
    }

    return res;
  };



  // #3 Generate a Range III
  //
  // Generate an array with the range of numbers from 108 to -67 using for loop and return
  //  the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) -- the return statement allocated O(n) space for the res array
  // What is the time it took to you complete this solution?  : 1min
  
  this.generateRange3 = () => {
    const res = [];

    for (let i = 108; i >= -67; i--) {
      res.push(i);
    }

    return res;
  };



  // #4 Generate a Range IV
  //
  // Generate an array with the range of numbers from 67 to -8 using a while loop and return the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) -- the return statement allocated O(n) space for the res array
  // What is the time it took to you complete this solution?  : 1min
  this.generateRange4 = () => {
    const res = [];

    let i = 67;

    while (i >= -8) {
      res.push(i);
      i--;
    }

    return res;
  };




  // #5 Generate Multiples of 5
  //
  // Generate an array with the range of numbers that are multiples of 5 from -38 to 116 using a for loop
  //  and return the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) -- the return statement allocated O(n) space for the res array
  // What is the time it took to you complete this solution?  : 1min
  
  this.generateMultiplesOf5 = () => {
    const res = [];

    for (let i = -35; i <= 115; i+=5) {
      res.push(i);
    }

    return res;
  };




  // #6 Generate Multiples of 3
  //
  // Generate an array with the range of numbers that are multiples of 3 from 76 to -21 using a for loop.
  //   Count how many there are and return the count as the result.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 2min

  this.generateMultiplesOf3 = () => {
    const res = [];

    let start = 76;

    while (start % 3 !== 0) {
      start--;
    }

    for (let i = start; i >= -21; i-=3) {
      res.push(i);
    }

    return res.length;
  };



  // #7 Generate Multiples of 3 (without array)
  //
  // Iterate and count how many multiples of 3 there are between 76 and -21.  Return the count.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min
  this.generateMultiplesOf3NoArray = () => {
    
    let count = 0;

    let start = 76;

    while (start % 3 !== 0) {
      start--;
    }

    for (let i = start; i >= -21; i-=3) {
      count++;
    }

    return count;
  };


  // #8 Generate Multiples of 3 (without array, using as few iterations as possible)
  //
  // Count how many multiples of 3 there are between 76 and -21 using as few iterations as possible.
  //  The most iterations possible is to increment by 1 each time.  The fewest is to iterate by 3.  But
  //  is the first or last number a multiple of 3?
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min

  this.generateMultiplesOf3FewestPossible = () => {
    let count = 0;

    let start = 76;

    while (start % 3 !== 0) {
      start--;
    }

    for (let i = start; i >= -21; i-=3) {
      count++;
    }

    return count;
  };



  // #9 Generate Divisibles
  //
  // Generate an array with the range of numbers that are either multiples of 3 or 5 from 6 to 85.
  //  Return the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min

  this.generateMultiplesOf3Or5 = () => {
    
    const res = [];

    for (let i = 6; i <= 85; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        res.push(i);
      }
    }

    return res;
  };



  // #10 Surprise Me
  //
  // Write a function that takes an argument that will be a positive integer less than or equal to 20.
  //  Positive integer from 0 to 20
  //  Generate an array with the range of numbers 200 to zero that are multiples of the number passed in.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 2min

  this.surpriseMe = (multiple) => {
    const res = [];

    let start = 200;

    while (start % multiple !== 0) {
      start--;
    }

    for (let i = start; i >= 0; i-= multiple) {
      res.push(i);
    }

    return res;
  };



  // #11 Arrays I
  //
  // Generate a new array containing all the numbers from both arrays passed into the function.  Return the
  //  array.  Do not worry about order or sorting.
  //
  // Test Input 1  : [4, 6, 2, 1, 9, 3, 10], [1, 3, 7, 8]
  // Test Output 1 : [4, 6, 2, 1, 9, 3, 10, 1, 3, 7, 8]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n): the result output allocated O(n) space for the array
  // What is the time it took to you complete this solution?  : 1min
  this.combineArrays = (array1, array2) => {
    return [...array1, ...array2];
  };



  // #12 Contains
  //
  // Write a function that receives an array and a number zero or greater.  If the number exists in the
  //   array, return true or false if it doesn't.
  //
  // Test Input 1  : [0, 2, 8, 9, 11, 21, 50], 11
  // Test Output 1 : true
  //
  // Test Input 2  : [0, 2, 8, 9, 11, 21, 50], 34
  // Test Output 2 : false
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min

  this.contains = (input, value) => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === value) {
        return true;
      }
    }

    return false;
  };



  // #13 Temperature I
  //
  // Write a function to covert celsius to fahrenheit and a 2nd function to convert fahrenheit to celsius.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1) -- the return statement allocated O(n) space for the result integer
  // What is the time it took to you complete this solution?  : 2min

  this.celsiusToFahrenheit = (degrees) => {
    //°F = (°C × 9/5) + 32

    return (degrees * 9/5) + 32;
  };

  this.fahrenheitToCelsius = (degrees) => {
    //°F = (°C × 9/5) + 32

    // °C = (°F - 32) × 5/9
    return (degrees -32) * 5/9;
  };



  // #14 Temperature II
  //
  // Write a function to counts from -200* Celcius to 200* Celcius and converts the number to Fahrenheit
  //  using the above method.  If both F and C are the same, return the number.  Otherwise, return null;
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min
  this.temperatureMatcher = () => {
    for (let i = -200; i <= 200; i++) {
      if (this.celsiusToFahrenheit(i) === i) {
        return i;
      }
    }

    return null;
  };



  // #15 At Odds
  //
  // Write a function that receives an array of positive numbers from 0 to 100.  Starting at the last
  //  element in the array and ending at the first element, generate a new array with all the odd numbers
  //  from the input array.
  //
  // Test Input 1  : [1, 2, 4, 6, 7, 8, 9, 18, 23, 55, 68, 70, 88, 89, 91, 98, 99, 100]
  // Test Output 1 : [1, 7, 9, 23, 55, 89, 91, 99]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 3min

  this.extractAllOdds = (input) => {
    const res = [];

    for (let i = input.length - 1; i>= 0; i--) {
      if (input[i] % 2 !== 0) {
        res.push(input[i]);
      }
    }

    return res;
  };



  // BONUS #1: Multiples of of both 3 and 5
  //
  // Write a function that receives a range and then generates a new array (using a while
  //  loop) containing any number is this a multiple of both 3 and 5.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 4min

  this.bonusMultiplesOf3And5 = (start, end) => {
    
    const res = [];

    //IIF end is less than start then swap them
    if (end < start) {
      [start, end] = [end, start];
    }

    // IFF start AND end are multiples of start
    while (start <= end) {
      if (start % 3 === 0 && start % 5 === 0) {
        res.push(start);
      }
      start++;
    }

    return res;
  };



  // BONUS #2: Multiples of Range Using Fewest Iterations Possible
  //
  // Write a function that receives a range and a multiple and then generates a new array
  //  (using only while loops) containing any number that is that multiple.  Use as few iterations
  //  as possible.
  //
  // HINT: The range may not start on that multiple.  You'll have to discover it first and then
  //        you'll be able to use the fewest iterations technique.
  //
  //
  // Constraints:
  //
  //  * Whichever of `start` or `end` is the higher number, always iterate forward from the lowest
  //     number to the highest
  //
  //
  // Test Input 1     : 13, 79, 5 or
  // Test Input 2     : 79, 13, 5
  // Test Output 1 & 2: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 2min

  this.bonusMultiplesOfRangeUsingFewest = (start, end, multiple) => {
    const res = [];

    if (end < start) {
      [start, end] = [end, start];
    }

    while (start % multiple !== 0) {
      start++;
    }

    while (start <= end) {
      res.push(start);
      start += multiple;
    }

    return res;
  };



  // BONUS #3: Multiples of Range Using Fewest Iterations Possible, Backwards
  //
  // Write a function that receives a range and a multiple and then generates a new array
  //  (using only while loops) containing any number that is that multiple.
  //
  //
  // Constraints:
  //
  //  * Whichever of `start` or `end` is the higher number, always iterate backward from the highest
  //     number to the lowest
  //
  //
  // Test Input 1     : 17,29,3
  // Test Input 2     : 29,17,3
  // Test Output 1 & 2: [27,24,21,18];
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min
  this.bonusMultiplesOfRangeUsingFewestBackwards = (start, end, multiple) => {
    if (end > start) {
      [start, end] = [end, start];
    }

    const res = [];

    while (start % multiple !== 0) {
      start--;
    }

    while (start >= end) {
      res.push(start);
      start -= multiple;
    }

    return res;

  };



  // BONUS #4: Multiples of Range Using Computation
  //
  // Write a function that receives a range and a multiple and then returns how many values are multiples
  //  of `multiple` within that range.  See if you can figure out a formula that will directly compute the
  //  answer without using any loops or arrays.
  //
  // HINT: `start` or `end` may not be a multiple of `multiple`, you'll have to discover which
  //        multiple is closest to each first.
  //
  //
  // Constraints:
  //
  //  * Use positive integers only (including 0).  Return if any arguments are less than 0
  //  * The answer must be the same whether `start` is lower than `end`, or vice versa
  //
  //
  // Test Input 1     : 17,29,3
  // Test Input 2     : 29,17,3
  // Test Output 1 & 2: 4;
  //
  // Test Input 3     : 13, 79, 5 or
  // Test Input 4     : 79, 13, 5
  // Test Output 3 & 4: 13
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 3min

  this.bonusMultiplesOfRangeComputation = (start, end, multiple) => {
    if (start < 0 || end < 0 || multiple < 0) {
      return null;
    }

    if (end < start) {
      [start, end] = [end, start];
    }

    while (start % multiple !== 0) {
      start++;
    }

    let count = 0;

    while (start <= end) {
      count++;
      start += multiple;
    }

    return count;
  };



  // BONUS #5: Array II
  //
  // Generate a new array containing all the numbers interleaved from both array arguments.  Return the
  //  array.
  //
  //
  // Constraints:
  //
  //  * Assume `input1` is always the same length or larger than `input2`.  Return null otherwise.
  //  * Assume the inputs are never null or empty.  Return null otherwise.
  //
  //
  // Test Input 1 : [4, 6, 2, 1, 9, 3, 10], [1, 3, 7, 8]
  // Test Output 1: [4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 4min

  this.bonusCombineArraysInterleaved = (input1, input2) => {
    if (!Array.isArray(input1) || !Array.isArray(input2) || input1.length === 0 || input2.length === 0 || input2.length > input1.length) {
      return null;
    }

    const res = [];

    for (let i = 0; i < input1.length; i++) {
      res.push(input1[i]);

      if (input2[i]) {
        res.push(input2[i]);
      }
    }

    return res;
  };



  // BONUS #6: Array III
  //
  // Generate a new array containing all the numbers interleaved from both array arguments.  Return the
  //  array.
  //
  //
  // Constraints:
  //
  //  * Input1 or Input2 can be of any length
  //  * Assume the inputs are never null or empty.  Return null otherwise.
  //
  //
  // Test Input 1 : [4, 6, 2, 1, 9, 3, 10], [1, 3, 7, 8]
  // Test Output 1: [4, 1, 6, 3, 2, 7, 1, 8, 9, 3, 10]
  //
  // Test Input 2 : [1,9,8,4,5,5], [7,8,2,0,11,6,12,34]
  // Test Output 2: [1,7,9,8,8,2,4,0,5,11,5,6,12,34]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n) -- the result allocated O(n) space for the res array
  //
  this.bonusCombineArraysInterleaved2 = (input1, input2) => {
    if (!Array.isArray(input1) || !Array.isArray(input2) || input1.length === 0 || input2.length === 0) {
      return null;
    }

    const res = [];

    let length = Math.max(input1.length, input2.length);

    for (let i = 0; i < length; i++) {
      if (i < input1.length) {
        res.push(input1[i]);
      }

      if (i < input2.length) {
        res.push(input2[i]);
      }
    }

    return res;
  };

}