



______________________________________________________________________________

/*
    1. Read the problem out loud.
    2. If there are no example I/O, ask for it.
    3. Write down pseudo-code for the naive solution, quickly share time/space complexity.
    4. But, I can optimize it this way: make the offer, and suggest how you'll do it.
        a. Only if you're confident.
        b. If not confident, acknowledge a better solution exists.
    5. Once you agree on how to proceed
    6. Expand your pseudo code into actual code. Talk out loud, don't be quiet.
    7. Once code is complete, do a dry run. Compare the english intent with the actual code.
    8. Test run - take an example input, usually from step 2.
    9. Time and space complexity.


    If / when they ask twisted variations - know that you did quite well in the problem itself, and you left enough time to go over variations.
*/


/*
    1. Read the problem out loud.
    2. If there are no example I/O, ask for it.
    3. Write down pseudo-code for the naive solution, quickly share time/space complexity.
    4. But, I can optimize it this way: make the offer, and suggest how you'll do it.
        a. Only if you're confident.
        b. If not confident, acknowledge a better solution exists.
    5. Once you agree on how to proceed
    6. Expand your pseudo code into actual code. Talk out loud, don't be quiet.
    7. Once code is complete, do a dry run. Compare the english intent with the actual code.
    8. Test run - take an example input, usually from step 2.
    9. Time and space complexity.


    If / when they ask twisted variations - know that you did quite well in the problem itself, and you left enough time to go over variations.


Today's solutions:
https://leetcode.com/problems/3sum/solutions/281302/javascript-with-lots-of-explanatory-comments/
https://leetcode.com/problems/top-k-frequent-elements/solutions/669782/javascript-no-sorting-o-n-time/


*/


/*


Given an integer array nums
return all the triplets [[nums[i], nums[j], nums[k]]
such that
    i != j, i != k, and j != k,
    nums[i] + nums[j] + nums[k] == 0.


Note that the solution set must not contain duplicate triplets.
Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [
          [-1,-1,2],
          [-1,0,1]
        ]
*/




// Edge Cases


  // check if the input is an array
  // check there are three elements
  // Sort




  function returnAllTriplets(array) {


    array.sort((a, b) => a - b);
    let result = [];


    for (let i = 0; i < array.length; i++) {
      if (i > 0 && array[i] === array[i - 1] ) {
        //skip
        continue;
      }


      let leftInd = i + 1;
      let right = array.length - 1;


      let sum = array[i] + array[left] + array[right];


      if (sum === 0) {


        result.push([ array[i], array[left], array[right] ]);
        left++;
        right--;


      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }


  }


/*
  Given an integer array nums and an integer k, return the k most frequent elements.
  You may return the answer in any order.


  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
*/


// consider edge Cases




function getKMostFrequentElements(nums) {


  let map = new Map();
  let maxFrequency = -1;


  for (const num of nums) {
    let newFrequency = (map.get(num) ?? 0 ) + 1
    maxFrequency = Math.max(maxFrequency, newFrequency);
    map.set(num, newFrequency);
  }


  let array = new Array(num.length).fill("a");


  for (const [number, freq] of map) {
    array[freq] = number;
  }




  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {


    if (result.legnth === k) {
      return result;
    }


    if (array[i] === "a") {
      continue;
    }


    result.push(array[i]);


  }


  return result;


  // [...map].sort()_


}


// Sort the array
  // Keep track of X


  // Load X into a map

