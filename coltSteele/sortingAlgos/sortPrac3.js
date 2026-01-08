

// function partition(arr, start = 0, end = arr.length - 1){

//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     let pivot = arr[start]
//     let swapIdx = start

//     for(let i = start + 1; i <= end; i++){
//         if(pivot > arr[i]){
//             swapIdx++
//             swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)
//     return swapIdx
// }

// function quickSort(arr, left = 0, right = arr.length - 1){

//     if(left < right){
//         let pivot = partition(arr, left, right)

//         quickSort(arr, left, pivot - 1)
//         quickSort(arr, pivot + 1, right)
//     }

//     return arr
// }

// console.log(quickSort([5,6,7,89,777,1,2,3,4]))





function getDigit(num, i){
    return Math.floor(Math.abs(num) / (Math.pow(10, i))) % 10
}


function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let max = 0
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]))
    }
    return max
}


function radixSort(nums){
    let count = mostDigits(nums)
    for(let k = 0; k < count; k++){
        let buckets = Array.from({length : 10}, () => [])
        for(i = 0; i < nums.length; i++){
            buckets[getDigit(nums[i], k)].push(nums[i])
        }
        nums = [].concat(...buckets)
    }
    return nums
}