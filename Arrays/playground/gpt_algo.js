/*
Write a function that takes an array of integers as input and returns the maximum value in the array. 
If the array is empty, return null.




*/


const maxValue = (array) => {
    if( array.length === 0) {
        return []
    }

   for(let i = 0; i < array.length; i++){
    return Math.max(array)
   }
}

console.log([2,5,1,8,4])