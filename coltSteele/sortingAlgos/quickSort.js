/*
Given an array, this helper functin should designate an element as a pivot
it should then rearrange elemets in the array so that all values less than the pivot
are moved to the left and greater values to the right of the pivot
The order of elememt on either dide of the pivot doesn't matter
the helper should do this in place, that is it should not create a new array
return the index of the pivot

the runtime of quick sort depends on how the pivot is selected
pivot should be the median value in the data that you're sorting

for simplicity choose the first element as the pivot


*/

/*
the function takes 3 arguments: an array, start index and end index
grab the pivot from the start of the array
store the current pivot index in a variable
loop through the array from start until the end
    if the pivot is greater than the current element increment the pivot index
    variable and then swap the current element with the element at the pivot index

swap the starting element with the pivot index
return the pivot index


*/


function partition(arr, start = 0, end = arr.length - 1){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)

    return swapIdx
}








/*
call the pivot helper on the array
when the helper returs to you the updated pivot index, 
recursively call the pivot helper on the subarray to the left of that index
and the subarray to the right of that index

the base case occurs when you have subarray with less than two elements


*/

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){

    let pivotIdx = partition(arr, left, right)

    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
    }
     
 return arr

}

console.table(quickSort([4,6,9,1,2,5,3, -395,20.49, 39283, -29]))