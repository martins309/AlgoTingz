// here we will practice the radix sort

// start with the methods obvi and then go from there

// function insertionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 1; i < arr.length; i++){
//         let currentVal = arr[i]
//         let j
//         for(j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--){
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1:
//     a < b ? -1 : 0
// }

// console.table(insertionSort(['chicken', 'noodle', 'bitch', 'stream'], comparator))




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
//     return arr
// }

// function quickSort(arr, left = 0, right = arr.length - 1){
//     if(arr <= 1) return arr

//     while(left  < right){

//         let pivotIdx = partition (arr, left, right)
//         quickSort(arr, 0, pivotIdx -1)
//         quickSort(arr, right, pivotIdx + 1)

//     }
//     return arr
// }

// console.table(quickSort([5,6,7,8,9,1,2,3,4,0]))







// function mergeArr(arr1, arr2){

//     let i = 0
//     let j = 0
//     let results = []

//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//     }

//     while(i < arr1.length){
//         results.push(arr1[i])
//         i++
//     }

//     while(j < arr2.length){
//         results.push(arr2[j])
//         j++
//     }

//     return results
// }

// function mergeSort(arr){
//     if(arr.length <= 1) return arr

//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))

//     return mergeArr(left, right)
// }

// console.table(mergeSort([3,7,4,1,3,6,5]))


// function selectionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }

//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(comparator(arr[min], arr[j]) > 0){
//                 min = j
//             }
//         }
        
//         if(i !== min) swap(arr, i, min)
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }


// console.table(selectionSort([2,5,4,3,1,6,7,8], comparator))


// function getDigit(num, i){
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// function digitCount(num){
//     if(num === 0) return 1
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

// function mostDigits(nums){
//     let max = 0
//     for(let i = 0; i < nums.length; i++){
//         max = Math.max(max, digitCount[nums[i]])
//     }

//     return max
// }




// function selectionSort(arr, comparator){
//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }

//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         let j = i + 1
//         while(j < arr.length){
//             if(comparator(arr[min], arr[j]) > 0){
//                 min = j
//             }
//             j++
//         }
//         if(i !== min) swap(arr, i, min)
//     }
//     return arr
// }

// console.table(selectionSort([4,7,6,1,4,3,7,8,9]))



// function partition(arr, start = 0, end = arr.length - 1){
//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     let pivot = arr[start]
//     let swapIdx = start

//     for(let i = start + 1; i <= end; i++){
//         if(pivot >= arr[i]){
//             swapIdx++
//             swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)

//     return swapIdx
// }


// function quickSort(arr, left = 0, right = arr.length - 1){

//     if(left < right){

//         let pivotIdx = partition(arr, left, right)
//         quickSort(arr, left, pivotIdx -1)
//         quickSort(arr, pivotIdx + 1, right)
//     }
//     return arr
// }

// console.table(quickSort([4,5,6,3,2,1,4,5]))



// function getDigit(num, i){
    
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// function digitCount(num){
//     if(num === 0) return 1
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

// function mostDigits(nums){
//     let max = 0
//     for(let i = 0; i < nums.length; i++){
//         max = Math.max(max, digitCount(nums[i]))
//     }
//     return max
// }


// function radixSort(nums){
//     let count = mostDigits(nums)
//     for(let k = 0; k < count; k++){
//         let buckets = Array.from({length: 10}, () => [])
//         for(let i = 0; i < nums.length; i++){
//             buckets[getDigit(nums[i], k)].push(nums[i])
//         }
//         nums = [].concat(...buckets)
//     }
//     return nums
// }

// console.table(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))

// and for the grand finalie, we got the radix ting them 

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
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
        let buckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            buckets[digitCount(nums[i], k)].push(nums[i])
        }
        nums = [].concat(...buckets)
    }
    return nums
}












// console.table(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))
