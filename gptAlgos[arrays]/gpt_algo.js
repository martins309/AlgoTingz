/*
Write a function that takes an array of integers as input and returns the maximum value in the array. 
If the array is empty, return null.




*/


//math.max does not take arrays directly but expects numbers as separate arguments


// const maxValue = (array) => {
//   return array.length !== 0 ? Math.max(...array) : null
// }

// console.log(maxValue([]))




/*
2. Remove Duplicates from Sorted Array
Problem:
Write a function that removes duplicates from a sorted array in place (no extra space) and returns the new length of the array. 
You only need to maintain the unique elements at the beginning.

*/



// const removeDups = (duplicates) => {
//     if(duplicates.length === 0) return 0

//     let j = 1
//    for(let i = 1; i < duplicates.length; i++){
//         duplicates[i - 1] !== duplicates[i] ? duplicates[j] === duplicates[i] : j++
//    }
//    return j
// }

// console.log(removeDups([1,1,2,3,3]))




// const removeDups = (duplicates) => {
//     if (duplicates.length === 0) return 0; // Edge case: Empty array

//     let j = 1; // Pointer for placing the next unique value

//     for (let i = 1; i < duplicates.length; i++) {
//         if (duplicates[i] !== duplicates[i - 1]) { // Check if the value is unique
//             duplicates[j] = duplicates[i]; // Place the unique value
//             j++; // Move the position for the next unique value
//         }
//     }

//     return j; // New length of the modified array
// };

// console.log(removeDups([1, 1, 2, 3, 3])); // Output: 3



// Problem: Move Zeros
// Given an integer array nums, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.
//  Do this in-place without making a copy of the array.

//Input: [0, 1, 0, 3, 12]  
// Output: [1, 3, 12, 0, 0]




////////////////////////////////separation ting /////////////////////////////////////////////////




//this is ass because of the following







// const moveZeros = (array) => {
//     if(array.length === 0)return 0

//     for(let i = 0; i < array.length; i++){
// // 1. let j = 1 inside the loop
// // Each time you loop (for), you're resetting j to 1, so you're effectively restarting the comparison from the beginning. This means j never tracks the correct position.
//     let j = 1

// // 2. array[i] < array[j] doesn't make sense for swapping zeros
// // The goal is to move all 0s to the end. Comparing values (<) doesn't achieve this since you're not looking for zeros explicitly.

// // 3. array[i] === i + 1 does nothing
// // === is a comparison, not an assignment. You're checking if array[i] equals i + 1, but this condition is unrelated to moving zeros.

    
//         array[i] < array[j] ? array[i] === i + 1 : j++
//     }
//     return array
// }
// // 4. Logic to "swap" or move elements is missing
// // To solve this problem, you need to identify zeros and "push" non-zero elements forward while ensuring zeros end up at the end.


// console.log(moveZeros([0, 1, 0, 3, 12]))


//Here is the correct way to do that
const moveZeros = (array) => {
    let nonZeroIndex = 0; // Pointer to track where to place the next non-zero element

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            // Swap the current non-zero element with the element at nonZeroIndex
            [array[nonZeroIndex], array[i]] = [array[i], array[nonZeroIndex]];
            nonZeroIndex++; // Move the nonZeroIndex to the right
        }
    }

<<<<<<< HEAD:Arrays/playground/gpt_algo.js
console.log(moveZeros([0, 1, 0, 3, 12]))
=======
    return array;
};

console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
>>>>>>> 156579692991e5b8e7d8e9ec79f87f1e6c945278:gptAlgos[arrays]/gpt_algo.js
