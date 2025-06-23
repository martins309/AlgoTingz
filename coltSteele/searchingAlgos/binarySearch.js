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

function binarySearch(arr, value){

    let left = 0
    let right = arr.length -1

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        if(arr[middle] === value){
            return middle

        }else if(value > arr[middle]) {
            left = middle + 1
        }else{
            right = middle -1
        }
    }
    return -1 
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2))