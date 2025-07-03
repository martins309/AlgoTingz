/*
store first element as the smallest value that you've seen
compare this item to the next item in the array until you find a smaller number
if the smaller number is found, designate the smaller number to be the new min and 
continue until the end of the array
if the minimum is the value index you initially began with
swap the two values
repeat this with the next element until the array is sorted



*/


function selectionSort(arr){
    let min = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i + 1] < min){
            min = arr[i + 1]
        }
    }

}