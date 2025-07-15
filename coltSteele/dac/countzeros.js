// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)


function countZeros(arr, val){
    if(arr.length === 0) return null

    let left = 0
    let count = 0
    const sortedArr = arr.sort((a, b) => a - b)
    
    let right = arr.length -1

    while(left <= right){
        let middle = Math.floor((left + right) / 2)

        if(sortedArr[middle] === val){
            count++

        }else if(sortedArr[middle] === val ){
            count++
            left = middle + 1
        }else{
            count++
            right = middle - 1
        }
        
    }
    return count
}

console.log(countZeros([0,0,0]), 0)