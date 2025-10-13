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