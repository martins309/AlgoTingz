// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)


function countZeros(arr){
    if(arr.length === 0) return null

    let left = 0
    let right = arr.length -1
    let count = 0
    while(left <= right){
        let middle = Math.floor((left + right) / 2)

        if()
    }
}