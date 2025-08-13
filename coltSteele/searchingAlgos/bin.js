/*
write a function that accepts a sorted array and a value
create a pointer for the left part of the array
and one for the right part of the array
while the left pointer comes before the right pointer
create a pointer for the middle
if you find the value that you want return the middle
if the value is too small then move the left poninter up
if the value is to large you move the right pointer down
if you dont find the value return -1 

*/

// function binarySearch(arr, val){
//     let left = 0
//     let right = arr.length - 1

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2)
//         if(arr[mid] === val){
//             return mid
//         } else if(val > arr[mid]){
//             left = mid + 1
//         }else {
//             right = mid - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([3,4,5,6,7,8,9,10,35,67], 4))



//return the index of the first occurence of a given value in a sorted array

// function firstOccurence(arr, val){
//     let left = 0
//     let right = arr.length - 1
//     let first = -1

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2)
//         if(arr[mid] === val){
//             first = mid
//             right = mid - 1
//         } else if(val > arr[mid]){
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return first
// }

// console.log(firstOccurence([], 8))



//return the last ocurrence of an element

function lastOccurence(arr, val){
    let left = 0 
    let right = arr.length - 1
    let lastIdx = -1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === val){
            lastIdx = mid 
            left =  mid + 1
        } else if(val > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return lastIdx
}

console.log(lastOccurence([1,2,2,2,4,5], 2))