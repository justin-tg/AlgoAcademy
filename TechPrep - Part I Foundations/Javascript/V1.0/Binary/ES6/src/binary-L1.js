
let L1 = function() {

  //  1. Write a function to test whether the 0th bit is set.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.is0thBitSet = (value) => {
    return (value & 1) === 1;

    // 0b001
    //     1
    
    //AND

    //     1 === 1

  };


  //  2. Write a function to test whether then 7th bit is set.
  //
  //
  // What is the Time Complexity of your solution?  : O(1)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.is7thBitSet = (value) => {
    let bitMask = 0b10000000;

    return !!(value & bitMask);
    // return (value & bitMask) === bitMask;
  };


  //  3. Write a function to test whether the 3rd and 4th bits are set.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.are3rdAnd4thBitsSet = (value) => {
    let bitMask = 0b11000;
    return (value & bitMask) === bitMask;
  };


  //  4. Write a function to left-shift n number of times.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.leftShift = (value, n) => {
    return value <<= n;
  };


  //  5. Write a function to right-shift n number of times.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.rightShift = (value, n) => {
    return value >>= n;
  };


  //  6. Write a function that sets the 0th bit in a value.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.set0thBit = (value) => {
    return value | 1;
  };


  //  7. Write a function that sets the 7th bit in a value.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.set7thBit = (value) => {
    let bitMask = 0b10000000;
    return value | bitMask;
  };


  //  8. Write a function that sets the 3rd and 4th bits in a value.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.set3rdAnd4thBits = (value) => {
    let bitMask = 0b11000;
    return value | bitMask;
  };


  //  9. Write a function that logical-or's two values together.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.logicalOr = (x, y) => {
    return x | y;
  };


  // 10. Write a function that logical-and's two values together.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.logicalAnd = (x, y) => {
    return x & y;
  };


  // 11. Write a function that counts the number of positive bits are set.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.howManyPositiveBitsSet = (value) => {
    let count = 0;
    while (value > 0) {
      count += (value & 1);
      value >>= 1;
    }
    return count;

  };


  // 12. Write a function that returns the byte in the n position of the value.
  //
  // Input :     0b00000101 11101011 10100101 11110001      n=2
  // Output:                11101011
  //   Byte Position      3        2        1        0
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.getByteN = (value, n) => {
    // let val = value >> (n * 8);

    let bitMask = 0b11111111;

    // return val & bitMask;

    return ((value >> (n * 8)) & bitMask);
    
  };


  // 13. Write a function to rotate a value left n-number of times.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.leftRotate8Bits = (value, n) => {
    const bitWidth = 8;
    n = n % bitWidth; // limit the amount of rotations to the length of the binary value ==> constant time
  
    for (let i = 0; i < n; i++) {
      let bitMask = 1 << (bitWidth - 1); // Create a mask to extract the MSB (most significant bit)
      
      // Extract the MSB by using bitwise AND with the mask and right shift it to the LSB
      let msb = (value & bitMask) >> (bitWidth - 1);
      
      // Left shift the value by 1, & compare it against 0b111111111 then depending on msb being 1 or 0 OR compare value to msb and return value
      value = ((value << 1) & ((1 << bitWidth) - 1)) | msb;
    }
  
    return value;
  };
  




  // 14. Write a function to rotate a value left n-number of times.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.rightRotate8Bits = (value, n) => {
    const bitWidth = 8;
    n = n % bitWidth;

    for (let i = 0; i < n; i++) {
      // extract the lsb and make it an msb bit mask for later
      let lsb = (value & 1) << (bitWidth - 1);
      
      // make a bit mask that is the length of the original width and all 1's
      // right shift the value by 1, and compare it to a bitmask of proper length with all 1s
      value = ((value >> 1) & ((1 << bitWidth) - 1));

      //set the lsb to the new msb
      value = value | lsb;      
    }
    return value;
  };


  // 15. Write a function to return the parity of a value.
  //
  // Parity is when even when there's and even number of 1-bits and odd when an odd number of
  //  1-bits set.  Return 0 for even, 1 for odd.
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.whichParity = (value) => {

    let count = 0;

    // iterate over the binary value and increment the count for each 1 bit found
    while (value) {
      //check if the lsb is 1 or 0, and increment count if it is 1
      if (value & 1) {
        count++;
      }

      //right shift the value thus removing the lsb
      value = value >> 1;
    }

    if (count % 2 === 0) {
      return 0;
    } else {
      return 1;
    }

  };


  // 16. Write a function to convert an integer into binary.
  //
  // Input : Any positive integer
  // Output: A string of 1's and 0's representing the binary form of the number.
  //
  // Example:
  //
  //   Input : 7
  //   Output: "1110"
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //

  // return output is a string of 1's and 0's ////   Output: "1110"
  this.intToBinary = (value) => {
    if (value === 0) {
      return "0";
    }

    let n = Math.abs(value);
    // Initialize an empty string to store the binary result.
    let res = "";
    // While the value is greater than zero:
    while (n > 0) {
      res = (n & 1) + res;
      n >>= 1;
    }
    return res;
  }


  // 17. Write a function that multiplies a number by 2 using only binary operations.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.multBy2 = (value) => {
    // if a value is multiplied by 2 is moves the value 1 position over to the left since binary is a 2 base system
    return value << 1;
  };


  // 18. Write a function that divides a number by 2 using only binary operations.
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  this.divBy2 = (value) => {
    return value >> 1;
  };
};
