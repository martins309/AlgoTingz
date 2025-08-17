/*
define a function called bubble sort takes an arr of nums
start looping with a variable called i at the end of the array 
towards the beginning
then create an inner loop outside of the outer loop called j 
from the beginning until i -1 
if arr[j] is greater than arr[j + 1] swap em 
return the sorted arr



*/

//when doing bubble sort, the first loop starts from the end of the array to the beginning
//the second loop starts at the beginning until i - 1 
// this keeps the loop from going over the edge
// and comparing integers with undefined values
function bubbleSort(arr){
    
    for(let i = arr.length; i > 0; i--){
      let j = 0
        while(j < i - 1 ){
          if(arr[j] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          }
          j++
        }
        
    }

    return arr
}

console.log(bubbleSort([5,8,2,6,4,1,3]))





// yeah this is too much writing lol mine is the best lol
// function es2015(arr){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i -1; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }

// console.log(es2015([1,5,8,66,4,3,56,1,3]))


//then theres this thing where you create a temp variable which 
// is also unecessary to me


//optimized to prevent unecessary swappping in a
// nearly sorted array
// function es5(arr){
//     let no
//     for(let i = arr.length; i > 0; i--){
//         no = true
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 console.log(arr, arr[j], arr[j + 1])
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 no = false
//             }
//         }
//         if(no) break
//     }
//     return arr
// }

// console.log(es5([8,1,2,3,4,5,7]))






/*
ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. 
Given an array, bubbleSort will sort the values in the array. 
The function takes 2 parameters: an array and an optional comparator function.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    // provide a default
  }
}
The comparator function is a callback that will take two values 
from the array to be compared. The function returns a negative value if 
the first value is less than the second, a positive value if 
the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume 
that the two parameters are numbers and 
that we are sorting the values from smallest to largest.


Examples

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
*/




// function bubbleSort(arr, comparator){
//     let noSwap
//     if(typeof comparator !== 'function'){
//         comparator = function(a, b) {
//             return a - b
//         }
//     }
//     for(let i = arr.length; i > 0; i--){
//         noSwap = true
//         for(let j = 0; j < i - 1; j++){
//             if(comparator(arr[j], arr[j + 1]) > 0){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 noSwap = false
//             }

//         }
//         if(noSwap) break
//     }
//     return arr
// }

// console.log(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))


// function comparator(a, b){
//     if(a > b) return 1
//     else if(a < b) return -1
//     return 0
// }