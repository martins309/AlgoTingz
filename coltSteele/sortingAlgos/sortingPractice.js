//this is the insertion sort algorithm once with and  without the comparator



// function insertionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => a - b
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
// // console.log(insertionSort([4,5,7,9,6,44,34,7]))
// console.table(insertionSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))

// function comparator(a, b){
//     return a > b ? 
//     1 :
//     a < b ? 
//     -1 : 0
// }


// function bubbleSort(arr){
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => a - b
//     }
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([4,5,76,8,9,2,3,88,67]))
// console.table(bubbleSort(['noddle', 'chicken', 'cinnamon', 'roll', 'filet', 'mignon']))

// function comparator(a, b){
//     return a > b ?
//     1 :
//     a < b ?
//     -1 : 0
// }


// function bubbleSort(arr, comparator) {
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => a - b
//     }
//     for(let i = arr.length; i > 0; i--){
//         let j = 0
//         while(j < i - 1){
//         comparator(arr[j], arr[j + 1]) > 0 
//             ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             : null
//             j++
//         }
//     }
//     return arr
// }
// const comparator = (a, b) => 
//     a > b ? 1 : 
//     a < b ? -1 : 0

// console.log(bubbleSort([3,56,7,8,2,3,547,8,4,1], comparator))

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j-- ){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}
console.log(insertionSort([2,4,58,1,5,7,2,1,0]))





