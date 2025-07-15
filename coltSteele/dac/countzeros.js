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
    let right = arr.length - 1
    let firstZero = -1

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        
        if(arr[middle] === 0){
            firstZero = mid
            right = middle -1
        }else {
            left = middle + 1
        }
    }

    return firstZero === -1 ? 0 : arr.length - firstZero
}

const nums = [1,1,1,0,0,0]
console.log(countZeros([1,1,1,0,0,0]))