//here we are going to test what i remember purely based of logic and understanding 

//here we go!!




// function bubbleSort(arr, comparator) {
//     let noSwap

//     function swap(arr, idx1, idx2){
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }

//     for(let i = arr.length; i > 0; i--) {
//         noSwap = false
//         for(j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 swap(arr, j, j + 1)
//                 noSwap = true
//             }
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.table(bubbleSort([9,3,57,4,8,3,1], comparator))







// function insertionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
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
//     return a > b ? 1 : 
//     a < b ? -1 : 0
// }

// console.table(insertionSort(["lily", 'apple', 'pussy', 'chicken'], comparator))


function selectionSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if (comparator(arr[min], arr[j])){
                min = j
            }
        }
        if(i !== min){
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}

function comparator(a, b){
    return a > b ? 1 :
    a > b ? -1 : 0
}

console.table(selectionSort(['lily', 'apple', 'pussy', 'chicken'], comparator))