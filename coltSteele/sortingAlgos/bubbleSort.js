/*
define a function called bubble sort takes an arr of nums
start looping with a variable called i at the end of the array 
towards the beginning
then create an inner loop outside of the outer loop called j 
from the beginning until i -1 
if arr[j] is greater than arr[j + 1] swap em 
return the sorted arr



*/


function bubbleSort(arr){
    
    for(let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j < arr.length; j++){
             if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
             }
        }
    }

    return arr
}

console.log(bubbleSort([5,8,2,6,4,1,3]))