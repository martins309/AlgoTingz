/*
Write a function called productOfArray
 which takes in an array of numbers 
 and returns the product of them all.

*/


//this is good but it is not recursive because
// the function does not call itself



// function productOfArray(arr){


//     function reduce (array){
//         if(array.length === 0){
//             return 
//         }
//         if(array){
//             return arr.reduce((a, b) => a + b)
//         }
//     }

//     return reduce(arr)



// }

// console.log(productOfArray([1,2,3]))


//here the function calls itself


function productOfArray(arr){
    if(arr.length === 0) return 1

    return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3]))