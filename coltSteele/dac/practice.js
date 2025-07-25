//Given a sorted array and a number, write a function called sortedFrequency 
//That counts the occurrences of the number in the array




// function sortedFrequency(arr, num){
//     function findFirst() {
//         let left = 0
//         let right = arr.length -1 
//         let result = -1

//         while(left <= right){
//             let middle = Math.floor((left + right) / 2)
//             if(arr[middle] === num){
//                 result = middle
//                 right = middle - 1
//             } else if (arr[middle] < num){
//                 left = mid + 1
//             } else{
//                 right = middle - 1
//             }
//         }
//         return result
//     }
    
//     function findLast(){
//         let left = 0 
//         let right = arr.length -1
//         let result = -1

//         while(left <= right){
//             let middle = Math.floor((left + right ) / 2)
//             if(arr[middle] === num){
//                 result = middle
//                 left = middle + 1
//             }else if(arr[middle] < num){
//                 left = middle + 1 
//             }else {
//                 right = middle - 1
//             }
//         }
//         return result 
//     }

//     let first = findFirst()
//     if(first === -1) return -1
//     let last = findLast()

//     return last - first + 1
// }






//look ma no hands lol

// function sortedFrequency(arr, num){
//     function occ1(){
//         let left = 0
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right ){
//             let mid = Math.floor((left + right ) / 2)

//             if(arr[mid] === num){
//                 result = mid
//                 right = mid - 1
//             }else if (arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }
//     function occ2(){
//         let left= 0 
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right){
//             let mid = Math.floor((left + right ) / 2)

//             if(arr[mid] === num){
//                 result = mid
//                 left = mid + 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }

//     let first = occ1()
//     if(first === -1) return -1
//     let last = occ2()

//     return last - first + 1
// }

// console.log(sortedFrequency([1,3,4,4,4,4,5,6,7], 4))


















//start here

// function sortedFreak(arr, num){
//     function num1(){
//         let left = 0
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right){
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === num){
//                 result = mid
//                 right = mid - 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//       return result
//     }

//     function num2(){
//         let left = 0 
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right) {
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === num){
//                 result = mid
//                 left = mid + 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }

//     let first = num1()
//     if(first === -1) return -1
//     let last = num2()

//     return last - first + 1
// }

// console.log(sortedFreak([1,2,3,4,5,5,5,5,5,6,7,8,15,34,56,78,88,99], 5))





//recursive call 

function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num)
    if(firstIdx === -1) return -1
    let lastIdx = findLast(arr, num)
    return lastIdx - firstIdx + 1


    function findFirst(low = 0, high = arr.length -1 ){
        if(high >= low) {
        let mid = Math.floor((left + right)/ 2)
            if((mid === 0 || num > arr[mid]) && arr[mid] === num ){

            }
        }
    }
}