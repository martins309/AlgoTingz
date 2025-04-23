/*
Implement a function called countUniqueValues which accepts a sorted array
and counts the unique values in the array. 
There can be negative numbers in the array 
but it will always be sorted
*/

function countUniqueValues(array) {
    let left = 0
    let right = left + 1 
    let unique = 0

    for(let i = 0; i < array.length; i++){
        if(array[left] === array[right]){
            right++
        }else{
            unique += 1
        }
    }
    return unique
}