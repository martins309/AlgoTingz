/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

*/


// We are going to be better with all algorithm problems by breaking them down and trying shit until I have a clear understanding
// this will also make me better javascript developer because I know how to use the tools better
// be aware of time and space complexity 

var removeElement = function(nums, val) {
    if(nums.length <= 0 && val <= 0) {
        return nums.length
    }

    let i = 0 
    let j = nums.length - 1
    k = nums.length
   

    while(nums.length > 0 && val > 0) {
        if(nums[i] === nums[j]) {
            nums.shift(nums[i])
            nums.pop(nums[j])
            i++
        } else {
            j--
            val = k
        }
    }
    return val
}


let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let m = 3
let n = 3

console.log(merge(nums1, m, nums2, n))

