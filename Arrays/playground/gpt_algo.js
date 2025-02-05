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


//this is ssooooooo wrong lol
// const removeDups = (duplicates) => {
//     for(let i = 1; i < duplicates.length; i++) {
//         let current = i
//         let next = current + 1

//         duplicates[current] !== duplicates[next] ? duplicates[next] === duplicates[current] : next++
//         current++

//     }

    

//     return duplicates.length - 1
// }

// console.log(removeDups([1,1,2,3,3]))


const removeDups = (duplicates) => {
    if (duplicates.length === 0) return 0; // Edge case: Empty array

    let j = 1; // Pointer for placing the next unique value

    for (let i = 1; i < duplicates.length; i++) {
        if (duplicates[i] !== duplicates[i - 1]) { // Check if the value is unique
            duplicates[j] = duplicates[i]; // Place the unique value
            j++; // Move the position for the next unique value
        }
    }

    return j; // New length of the modified array
};

console.log(removeDups([1, 1, 2, 3, 3])); // Output: 3
