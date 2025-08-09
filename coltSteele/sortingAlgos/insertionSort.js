/*

start by picking the second element in the array
now compare the second element with the one before it 
and swap if necessary.
Continye to the nect element and if it is in the incorrect
order, iterate through the sorted portion 
i.e the left side 
to place the element in the correct place
repeat until the array is sorted




*/


function insertionSort(arr){
    if(arr.length === 0) return arr

    for(let i = 2; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        }
    }
    return arr
}
console.log(insertionSort([4,9,2,4,0,7,5]))