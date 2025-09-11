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




// function insertionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => (a - b)
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


// const comparator = (a, b) => 
//     a > b ? 1
//     : a < b ? -1 : 0

// console.log(insertionSort(['indian', 'babies', 'boogers', 'typhoon', 'doodle'], comparator))





// function bubbleSort(arr){
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([3,6,8,7,45,4,68,1]))






// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min = i
        
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[min] > arr[j]){
//                 min = j
//             }
//         }
//         if(i !== min){
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
//     return arr
// }

// console.log(selectionSort([4,3,7,9,8,665,1,33,2,9]))





//////////////Radix Ting////////////////////////////////


// function getDigit(num, i){
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }


// function digitCount(num){
//     if(num === 0) return 1 
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }


// function mostDigits(nums){
//     let maxDigits = 0
//     for(let i = 0; i < nums.length; i++){
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//     }
//     return maxDigits
// }




// function radixSort(nums){

//     let count = mostDigits(nums)

//     for(let k = 0; k < count; k++){
//         let buckets = Array.from({ length: 10}, () => [])
//         for(let i = 0; i < nums.length; i++){
//             buckets[getDigit(nums[i], k)].push(nums[i])
//         }
//         nums = [].concat(...buckets)
//     }
//     return nums
// }









// console.log(bubbleSort([3,56,7,8,2,3,547,8,4,1], comparator))



// const selectionTing = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[min] > arr[j]){
//                 min = j
//             }
//         }
//         if(i !== min) {
//             [arr[min], arr[i]] = [arr[i], arr[min]]
//         }
//     }
//     return arr
// }

// console.log(selectionTing([6,3,8,1,7,3,5]))
















//////////Bubble Sort//////////////


// function bubbleSort(arr, comparator) {
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => a - b
//     }
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1] ]
//     }
//     for(let i = arr.length; i > 0; i-- ){
//         for (let j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr 
// }

// const comparator = (a, b) => {
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.log(bubbleSort(['zebra', 'donkey', 'youMuj', 'apples', 'esteak', 'kitty'], comparator))


//write the comparator tomorrow







//Alright now for insertion sort ting




// we are comparing the second number to the first number and inserting it in place if the second number
// is larger than the first
// in an array if i = 1 and the value of one is 1
// and j = i - 1 and that value is 3 
// then you insert the one where the 3 is.
// we are going backwards because 


// function insertionSort(arr){
//     if(typeof comparator !== 'function'){
//         comparator = (a, b) => a - b
//     }
//     for(let i = 1; i < arr.length; i++){
//         let currentVal = arr[i]
//         let j = i - 1
//         while(comparator(j >=0 && arr[j], currentVal) > 0){
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr
// }

// const comparator = (a, b) => {
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.log(insertionSort(['kitty', 'uranus', 'bottle', 'cookies', 'gwen']))








// function insertionSort(arr, comparator) {
//     if(typeof comparator !== 'function') {
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i]
//         let j
//         for(j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr
// }
// function comparator(a, b) {
//     return a > b ? 1 : 
//     a < b ? -1 : 0
// }

// console.log(insertionSort(["titty", 'kitty', 'lick', 'prick', 'apple'], comparator))






// function bubbleTing(arr, comparator){
//     if(typeof comparator !== 'function') {
//         comparator = function(a , b) {
//             return a - b
//         }
//     }
//     function swap(arr, idx1, idx2){
//         return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.log(bubbleTing(['zebra', 'chicken', 'donkey', 'anus', 'recipe', 'taint'], comparator))










// function selectionSort(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     function swap(arr, idx1, idx2){
//         return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(comparator(arr[min], arr[j]) > 0){
//                 min = j
//             }
//         }
//         if(i !== min){
//             swap(arr, i, min)
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 : 
//     a < b ? -1 : 0
// }
// console.log(selectionSort(['zebra', 'chicken', 'donkey', 'anus', 'recipe', 'taint'], comparator))






// function bubblingBubble(arr, comparator){
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     function swap(arr, idx1, idx2){
//         return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 swap(arr, j + 1, j)
//             }
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.log(bubblingBubble(['zebra', 'chicken', 'donkey', 'anus', 'recipe', 'taint'], comparator))




function insertionTing(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j = i - 1
        while(j >=0 && comparator(arr[j], currentVal) > 0){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}
function comparator(a, b){
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.log(insertionTing(['zebra', 'chicken', 'donkey', 'anus', 'recipe', 'taint'], comparator))
