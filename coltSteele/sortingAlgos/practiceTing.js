//practice the sorting algorithms that we've learned so far


//give it a go


//bubble sort ting


// function bubbleSort(arr, comparator) {
//     let noSwap
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = arr.length; i > 0; i--) {
//         noSwap = true
//         for(let j = 0; j < i - 1; j++) {
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 noSwap = false

//             }
//         }
//         if(noSwap) break 
//     }
//     return arr
// }

// console.log(bubbleSort([12,4,5,67,43,233,56,42,4,67,8,6], comparator))

// function comparator(a, b) {
//     if(a > b) return 1
//     if(a < b) return -1
//     return 0
// }


// I forgot the the no swap logic at the end and the noswap is equal to true underneath the first for loop



//again!


// function bubbleSort(arr, comparator){
//     let noSwap
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = arr.length; i > 0; i--) {
//         noSwap = true
//         for(let j = 0; j < i - 1; j++) {
//             comparator(arr[j], arr[j + 1]) > 0 
//             ? ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]], noSwap = false) 
//             : null
            
//         }
//         if(noSwap)break
//     }

//     return arr
// }
// console.log(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))
// // console.log(bubbleSort([12,4,5,67,43,233,56,42,4,67,8,6], comparator))



// function comparator(a, b){
//     if(a > b) return 1
//     if(a < b) return -1
//     return 0
// }



//Do the bubble ting again


// function bubbleSort(arr, comparator) {
//     let noSwap 
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = arr.length; i > 0; i--) {
//         noSwap = true
//         for(let j = 0; j < i - 1; j++) {
//             comparator(arr[j], arr[j + 1]) > 0
//             ? ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]], noSwap = false)
//             : null
//         }
//         if(noSwap) break
//     }
//     return arr
// }
// console.log(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))


// function comparator(a, b) {
//     if(a > b) return 1
//     else if(a < b) return -1
//     return 0 
// }


// function bubbleSort(arr, comparator) {
//     let noSwap 
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = arr.length; i > 0; i--){
//         noSwap = true
//         for(let j = 0; j < i - 1; j++){
//             comparator(arr[j], arr[j + 1]) > 0
//             ? ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]], noSwap = false )
//             : null
//         }
//         if(noSwap) break
//     }
//     return arr
// }

// console.log(bubbleSort([12,4,5,67,43,233,56,42,4,67,8,6], comparator))


// function comparator(a, b) {
//     if(a > b) return 1
//     if(a < b) return -1
//     return 0 
// }


// function selectionSort(arr, comparator) {
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1 ; j < arr.length; j++){
//             comparator(arr[min], arr[j]) > 0
//             ? min = j 
//             : null
//         }
//         i !== min ? [arr[i], arr[min]] = [arr[min], arr[i]]
//         : null
//     }
//     return arr
// }
// console.log(selectionSort([22,4,5,67,4,17,6], comparator))


// function comparator(a, b) {
//     if(a > b) return 1
//     if(a < b) return -1
//     return 0
// }






// we need a flawless victory this time my dude :)



// function selectionSort(arr, comparator) {
//     if(typeof comparator !== 'function') {
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 0; i < arr.length; i ++) {
//         let min = i
//         for(let j = i + 1; j < arr.length; j++) {
//             comparator(arr[min], arr[j]) > 0
//             ? min = j
//             : null
//         }
//         i !== min ? 
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//         : null
//     }

//     return arr
// }
// console.log(selectionSort([22,4,5,67,4,17,6], comparator))


// function comparator(a, b) {
//     return a > b ? 1 : a < b ? -1 : 0
// }




//sliding windows practice

// function maxSubArray(arr, num){

//     let maxSum = 0
//     let tempSum = 0

//     for(let i = 0; i < num; i++){
//         maxSum += arr[i]
//     }
//     tempSum = maxSum
//     for(let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[i - num] + arr[i]
//         maxSum = Math.max(tempSum, maxSum)
        
//     }
//     return maxSum
// }
// console.log(maxSubArray([1,2,3,4,5], 3))





//do it again now that I understand what it does completely


// function maxSubArray(arr, num){
//     if(arr.length < num) return null 

//     let maxSum = 0
//     let tempSum = 0

//     for(let i = 0; i < num; i++){
//         maxSum += arr[i]
//     }

//     tempSum = maxSum
//     for(let i = num; i < arr.length; i++ ){
//         tempSum = tempSum - arr[i - num] + arr[i]
//         maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum
// }

// console.log(maxSubArray([1,2,3,4,5], 3))





//this is the maxSub array sum 
// it is the maximum sum you can get when given k

// function maxSubArraySum(arr, k){
//     if(arr.length < k) return null

//     let maxSum = 0
//     let windowSum = 0
//     let windowStart = 0

//     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//         windowSum += arr[windowEnd]

//         if(windowEnd >= k - 1){
//         maxSum = Math.max(maxSum, windowSum)
//         windowSum -= arr[windowStart]
//         windowStart++
//         }

//     }
//     return maxSum
    
// }

// console.log(maxSubArraySum([100,200,300,400], 2))







//final maxSubArrSum practice


function maxSubArraySum(arr, k){
    arr.length < k ?? null

    let windowStart = 0 
    let maxSum = 0
    let windowSum = 0

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]

        if(windowEnd >= k - 1){
            maxSum = Math.max(maxSum, windowSum)
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    return maxSum

}

console.log(maxSubArraySum([100,200,300,400], 2))










//this the  sliding windows ting

