
let L0 = class {

  //  1. Write a recursive function to count and log 1 to N.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from 1 to N
  //
  // Example:
  //
  // Input : 3
  // Output:
  //
  //  1
  //  2
  //  3
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  from1ToN(n) {

    //base case
    if (!n) {
      return 1;
    }

    //repeating unit of work
    const res = this.from1ToN(n-1);
    console.log(n);

  };

  /*
    1
    2
    3
    4
    5
  */



  //  2. Write a recursive function to count and log N to 1.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from N to 1
  //
  // Example:
  //
  // Input : 3
  // Output:
  //
  //  3
  //  2
  //  1
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  fromNTo1(n) {
    //base case is when x equals n
    if (n === 0) {
      return 0;
    }

    //repeating unit of work
    console.log(n);
    this.fromNTo1(n-1);

  }


  //  3. Write a recursive function to count and log X to Y inclusive.  Assume X is always less than Y.
  //
  // Input : Positive Integer
  // Output: console.log() of all values from X to Y
  //
  // Example:
  //
  // Input : 3, 5
  // Output:
  //
  //  3
  //  4
  //  5
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  fromXtoY(x, y) {
    if (x > y) {
      return 0;
    }

    console.log(x);
    this.fromXtoY(x+1, y);
  }


  //  4. Write a recursive function to calculate the length of an array.  Return the value.
  //
  // Input : Array of numbers
  // Output: Length of array
  // Constraints: Must recursively compute the length, cannot use array.length
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  getLengthOfArray(input) {

    let count = 0;

    function traverseArrayRecursively(input) {
      if (!input || !input.length) {
        return;
      }

      input.pop();
      traverseArrayRecursively(input);
      count++;
    }

    traverseArrayRecursively(input);
    return count;

  }

  // getLengthOfArray1(input, count) {
  //   if (!input || !input.length) {
  //     return count;
  //   }

  //   input.pop();
  //   this.getLengthOfArray(input, count);
  //   count++;
  // }


  //  5. Write a recursive function to calculate the sum of an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  sumOfArray(input) {

    let sum = 0;

    function traverseArrayRecursively(input) {
      if (!input || !input.length) {
        return;
      }

      sum += input[0];
      input = input.slice(1);
      traverseArrayRecursively(input);

    }

    traverseArrayRecursively(input);
    return sum;

  }


  //  6. Write a recursive function to calculate the average of the values in an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  // Example:
  //
  // Input : [23, 17, 23, 42, 8, 2, 73, 101, 83, 92]
  // Output: 46.4
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  averageOfArray(input) {

    let sum = 0;
    let length = 0;

    function recurse(input) {
      if (!input || !input.length) {
        return 0;
      }

      sum += input[0];
      length++;
      input = input.splice(1);
      recurse(input);
    }

    recurse(input);
    return sum / length;

  }

  // 


  //  7. Write a recursive function to return the sum of all evens in an array
  //
  // Input : Array of numbers
  // Output: Sum of all numbers in array
  //
  // Example:
  //
  // Input : [1, 2, 3, 4, 5, 6, 7, 8]
  // Output: 20
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  sumOfEvens(input) {

    let sum = 0;

    function recurse(arr) {
      if (!arr || !arr.length) {
        return;
      }

      if (arr[0] % 2 === 0) {
        sum += arr[0];
      }
      arr = arr.splice(1);
      recurse(arr);
    }

    recurse(input);

    return sum;

  }




  //  8. Write a recursive function to compute the number of digits in an integer
  //
  // Input : Any positive integer between 1 and 2,147,483,647
  // Output: The number of digits in the number
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  numberOfDigits(n) {

    let digits = 0;

    function recurse(num) {
      if (num < 1) {
        return;
      }

      digits++;
      num /= 10;

      recurse(num);

    }

    recurse(n);

    return digits;

  }


  //  9. Write a recursive function to return whether the integer contains the number K
  //
  // Input : (Any positive integer between 1 and 2,147,483,647 , number to check for)
  // Output: True or false
  //
  // Example:
  //
  // Input : (13250, 5)
  // Output: true
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  nContainsK(n, k) {
    n = ~~n; // Convert floats to whole numbers
    k = ~~k; // Convert floats to whole numbers


    // returns the last digit
    if (n % 10 === k) {
      return true;
    }

    // if n is less than or equal to 0 then return false
    if (n <= 0) {
      return false;
    }

    return this.nContainsK(Math.floor(n / 10), k);

  }


  // 10. Write a recursive function to calculate the power of a number (exponent, number)
  //
  // Input : (any positive integer, a number to raise the power by)
  // Output: The power of x, y
  //
  // Example:
  //
  // Input : (2, 4)
  // Output: 16
  //
  //
  // What is the Time Complexity of your solution?  :
  // What is the Space Complexity of your solution? :
  //
  power(x, y) {

    if (y === 0) {
      return 1;
    }

    let res = y;

    function multiplyTimesItself(count, value) {
      if (count <= 0) {
        return res;
      }

      res = value;
      
      return multiplyTimesItself(count - 1, value * value)
    }

    return multiplyTimesItself(x, y);
  }
};