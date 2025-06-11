/////////////////Slinding Windows Ting/////////////////////////



//O(n^2)

// function slidingTing(arr, num) {
//   if(num > arr.length) return null

//   //account for an array that is all negative
//   let max = -Infinity
//   //does go all the way to the end of the array
//   for(let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0
//     for(let j = 0; j < num; j++) {
//       //add the three numbers together
//       temp += arr[i + j]
//     }
//     if(temp > max) {
//       max = temp
//     }
//   }
//   return max 
// }
// console.log(slidingTing([1,2,3,4,5,6,7,8,9], 3))


///////actual sliding window approach


// function maxSubArray(arr, num) {
//   let maxSum = 0
//   let tempSum = 0

//   if(arr.length < num) return null
//   for(let i = 0; i < num; i++){
//     maxSum += arr[i]
//   }
//   tempSum = maxSum
//   for(let i = num; i < arr.length; i++){
//     tempSum = tempSum - arr[i - num] + arr[i]
//     maxSum = Math.max(maxSum, tempSum)
//   }
//   return maxSum
// }

// console.log(maxSubArray([1,2,3,4,5,6,7,8,9], 3))
  
  
  
  
  
  
  
  /*

  Given an array of integers and a number, write a function called maxSubarraySum, 
  which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
  
  */


// function maxSubArraySum(arr, k) {
//   let maxSum = 0
//   let windowSum = 0
//   let windowStart = 0

//   if(arr.length < k) return null 

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//     windowSum += arr[windowEnd]  // add the next element

//     //slide the window if we've hit the window size of k
//     //if we're at the third position or the kth position, start comparing
//     if(windowEnd >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum)  //update max 
//       windowSum -= arr[windowStart] // subtract the window going out 
//       windowStart++ //slide the window forward 
//     }
//   }

// return maxSum

// }


/*
🧪 Practice: Find Average of All Contiguous Subarrays of Size K
Prompt:
Given an array of integers and a number k, 
return an array of the averages of all contiguous subarrays of size k.


// Example:
findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5); 
// Expected Output: [2.2, 2.8, 2.4, 3.6, 2.8]


*/

// function findAverages(arr, k){
//     let averages = []
//     let windowStart = 0
//     let windowSum = 0

//     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//         windowStart+= arr[windowEnd]

//         if( windowEnd >= k - 1) {
//             averages.push(windowSum / k)
//         }

//         windowSum -= arr[windowStart]

//         windowStart++
        
        
//     }
//     return averages
// }

// console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))


// function maxAverage(arr, k) {
//     let maxAv = -Infinity
//     let windowSum = 0
//     let windowStart = 0

//     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//         windowSum += arr[windowEnd]

//         if(windowEnd >= k - 1){
//             maxAv = Math.max(maxAv, windowSum / k)
//             windowSum -= arr[windowStart]
//             windowStart++
//         }
//     }

//     return maxAv
// }
// console.log(maxAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))



//gpt showed me this for practice 
// function longestSubString(s, k) {
//   if (s.length === 0 || k === 0) return 0;

//   let windowStart = 0;
//   let chars = {};
//   let maxLength = 0;

//   for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//     const rightChar = s[windowEnd];

//     // Add current char to frequency map
//     chars[rightChar] = (chars[rightChar] || 0) + 1;

//     // Shrink window if distinct chars > k
//     while (Object.keys(chars).length > k) {
//       const leftChar = s[windowStart];
//       chars[leftChar]--;

//       if (chars[leftChar] === 0) {
//         delete chars[leftChar]; // no longer in window
//       }

//       windowStart++; // shrink window from the left
//     }

//     // Update max length
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }

//   return maxLength;
// }

// console.log(longestSubString("eceba", 2)); // Output: 3


/*
Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray 
of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(arr, num){
  if(arr.length === 0 || num === 0) return null

  let windowStart = 0
  let min = Infinity
  let windowSum = 0

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]
    

  }

  return min 

}





