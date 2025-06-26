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
// function bubbleSort(arr){
    
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j + 1])
//              if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//              }
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([5,8,2,6,4,1,3]))





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
function es5(arr){
    let no
    for(let i = arr.length; i > 0; i--){
        no = true
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                console.log(arr, arr[j], arr[j + 1])
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                no = false
            }
        }
        if(no) break
    }
    return arr
}

console.log(es5([8,1,2,3,4,5,7]))