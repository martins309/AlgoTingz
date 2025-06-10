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


function maxSubArraySum(arr, k) {
  let maxSum = 0
  let windowSum = 0
  let windowStart = 0

  if(arr.length < k) return null 

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]  // add the next element

    //slide the window if we've hit the window size of k
    //if we're at the third position or the kth position, start comparing
    if(windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)  //update max 
      windowSum -= arr[windowStart] // subtract the window going out 
      windowStart++ //slide the window forward 
    }
  }

return maxSum

}


