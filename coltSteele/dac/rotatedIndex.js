// Write a function called findRotatedIndex which accepts 
// a rotated array of sorted numbers and an integer. 
// The function should return the index of the integer in the array. 
// If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5


// function findRotatedIndex(arr, num){


    //check to see if the num is in the first half of the array
//     function firstHalf(){

//         let left = 0
//         let right = arr.length - 1
//         let index = -1

//         while(left <= right){
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === num){
//                 return mid 
//             } else if(arr[mid] > num){
//                 right = mid - 1
//             } else {
//                 left = mid  + 1
//             }
      
        
//     }

//     return index

// }

    
//     function lastHalf(){
//         let left = 0
//         let right = arr.length - 1
//         let index = -1

//         while(left <= right){
//             let mid = Math.floor((left + right ) / 2)
//             if(arr[mid] === num){
//                 return mid
//             }else if (arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 left = mid + 1
//             }
//         }
//         return index
//     }

//     let first = firstHalf()
//     let last = lastHalf()

//     return first !== -1 
//     ? first 
//     : last !== -1 
//     ? last : -1 
 

// }
// console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16))