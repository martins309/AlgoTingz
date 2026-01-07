// so here we are going to study the singly linked list ting



//insertion sort


// function insertionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 1; i < arr.length; i++){
//         let currentVal = arr[i]
//         let j = i - 1
//         while(j >= 0 && comparator(arr[j], currentVal) > 0){
//             arr[j + 1] = arr[j]
//             j--
//         }
        
//         arr[j + 1] = currentVal

//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 : a < b ? -1 : 0
// }

// console.table(insertionSort([4,12,6,78,5,34]))



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
//         let pivotIdx = partition(arr, left, right)

//         quickSort(arr, left, pivotIdx - 1)
//         quickSort(arr, pivotIdx + 1, right)
//     }

//     return arr
// }

// console.table(quickSort([4,5,6,1,2,3]))

function bubbleSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }

    function swap(arr, idx1, idx2,){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1])){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

