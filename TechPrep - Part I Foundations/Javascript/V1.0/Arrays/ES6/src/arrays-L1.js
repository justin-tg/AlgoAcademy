"use strict";


let L1 = function() {

  //  1. Fill all array elements with value, or zero if none provided.  Return original array
  //
  //
  //  Sometimes you might want to initialize an array with default values or reset it
  //   to a default state.  Most, if not all, modern compilers will automatically
  //   initialize an array to a default of all zero values, called "zeroing" an
  //   array.
  //
  //  Below, we get to do this ourselves.  Fill each element of the array with the
  //   value provided by `value` or zero if not provided.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.fillArray = (input, value) => {
    return input.fill(value);
  };



  //  2. Return the sum of all values in an an array of numbers
  //
  //
  //  A sum is simply the result of all values of an array
  //   added together.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.sum = (input) => {
    let res = 0;

    for (const num of input) {
      res += num;
    }

    return res;
  };



  //  3. Return the average value of an array of numbers
  //
  //
  //  The average is the sum of all values in the array, divided by the number
  //   of elements in the array.
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.average = (input) => {
    let sum = 0;

    for (const num of input) {
      sum += num;
    }

    return sum / input.length;
  };



  //  4. Return the median of an array that has either even and odd number of elements
  //
  //
  //   The median is the middle value of a sorted array.  When even number of values, its the
  //    average of the two middle values.  For more information on the median formula, you
  //    may consult Wikipedia.
  //
  //   https://en.wikipedia.org/wiki/Median
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  // What is the time it took to you complete this solution?  : 5min

  this.median = (input) => {
    input.sort((a, b) => a - b);

    let middle = input.length / 2;

    if (input.length % 2 !== 0) {
      middle = Math.floor(middle);
      return input[middle];
    } else if (input.length % 2 === 0) {
      return (input[middle - 1] + input[middle]) / 2;
    }
  };



  //  5. Return the index of the value specified, or null if not found
  //
  //
  //  In this case, we are looking for the index of the value being searched.
  //   So input[0] = "zero".  Thus, "zero" has the index of 0.  Return the index
  //   of the value if its found and null if it is not.
  //
  //  Test Input 1  : ["zero", "one", "two", "three", "four", "five"], "zero"
  //  Test Output 1 : 0
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  // What is the time it took to you complete this solution?  : 1min

  this.findIndex = (input, value) => {
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === value) {
        return i;
      }
    }

    return null;
  };



  //  6. Return index of the nth last odd in the array, null if no odd numbers
  //
  //
  //  This one is a little trickier than the others.  In this case, we'll be looking for the index
  //   position of the nth last odd in the list.  So, findNthLastOdd(1) should return 11.  This
  //   is because `5` is the 1st odd from the end, and it is at the 11th index position in the
  //   array.
  //
  // Test Input 1  : [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2], 1
  // Test Output 1 : 11
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  // What is the time it took to you complete this solution?  : 2min

  this.findNthLastOdd = (input, nth) => {
    let oddCount = 0;

    for(let i = input.length - 1; i >= 0; i--) {
      if (input[i] % 2 !== 0) {
        oddCount++;
      }

      if (oddCount === nth) {
        return i;
      }
    }

    return null;
  };



  //  7. Return new array with range starting at index `start` and ending with index
  //     `end`, inclusive.  Return null if input is empty or `start` is out of bounds.
  //     You  might need to re-arrange `start` and `end` so `start` is lower than `end`.
  //
  //
  //  Test Input  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4
  //  Test Output 1: [3,4,5]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 4min

  this.getRangeInclusive = (input, start, end) => {

    if (end < start) {
      [start, end] = [end, start];
    }

    if (input == null || input.length === 0 || start < 0 || start >= input.length) {
      return null;
    }

    if (end > input.length) {
      end = input.length - 1;
    }

    const res = [];
    for (let i = start; i <= end; i++) {
      res.push(input[i]);
    }

    return res;
  };



  //  8. Select a range of values in any array then return the average of those values
  //
  //
  //  Given a start index and end index indicating a sub-range within the array, return the
  //   average value of that sub-range.
  //
  //   HINT: See if you can reuse any functions you completed earlier in this file
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 2min
  
  this.getAverageOfRange = (input, start, end) => {
    let input2 = this.getRangeInclusive(input, start, end);

    let sum = 0;

    for (const num of input2) {
      sum += num;
    }

    return sum / input2.length;
  };


  //  9. Make a copy of an array
  //
  //  HINT: This of this as: Make a copy.
  //
  //
  //  Test Input 1 : [0, 10, 20, 30, 35, 55, 75, 100]
  //  Test Output 1: [0, 10, 20, 30, 35, 55, 75, 100]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 1min

  this.copyArray = (input) => {
    const res = [];

    for (const ele of input) {
      res.push(ele);
    }

    return res;
  };



  // 10.  Swap two elements in an array.  Return original array
  //
  //
  //  An interviewers favorite.  Swap two elements within an array.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  // What is the time it took to you complete this solution?  : 1min

  this.swapWithinArray = (array, ind1, ind2) => {
    
    const ele2 = array[ind2];

    array[ind2] = array[ind1];
    array[ind1] = ele2;

    return array;

  };



  // 11. Copy smaller array into larger array.  First initialize the target array with zeroes.  `to`
  //      must be pre-initialized to a fixed size and zeroed.
  //
  // HINT: Think of this as: Copy A into B (from into to).
  //
  //
  // Test Input 1 : [1,2,3,4,5,6], [_, _, _, _, _, _, _, _, _, _, _, _]
  // Test Output 1: [1,2,3,4,5,6,_,_,_,_,_,_];
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  // What is the time it took to you complete this solution?  : 2min

  this.expandArray = (a, b) => {
    b.fill(0);

    for (let i = 0; i < a.length; i++) {
      b[i] = a[i];
    }

    return b;
  };
};

