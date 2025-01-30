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


//will this work without the parenthesis??

const fetchTing = callback => {
    setTimeout(() => {
        callback("I need TP")
    })
}

console.log("for my bunghole")

