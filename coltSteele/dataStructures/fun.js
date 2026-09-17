//here we are going to test what i remember purely based of logic and understanding 

//here we go!!


//Bubble Sort Ting Them.... 

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


// function selectionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if (comparator(arr[min], arr[j])){
//                 min = j
//             }
//         }
//         if(i !== min){
//             [arr[min], arr[i]] = [arr[i], arr[min]]
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a > b ? -1 : 0
// }

// console.table(selectionSort(['lily', 'apple', 'pussy', 'chicken'], comparator))




function mergeArr(arr1, arr2) {

    let result = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        result.push(arr2[j])
        j++
    }


    return result
}


console.log(mergeArr([1,10,50], [2,14,99,100]))

// okay so here is not going to actually sort the array, this is just to merge to the array 
// the arrays must already be sorted 


