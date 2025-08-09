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

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        }
        if(arr[i + 1] < ar[i]){
            [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
        }
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort([4,9,2,4,0,7,5]))
                         [4,2,9,4,0,7,4]