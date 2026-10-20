//write me a bubble sort without the comparator 
// as best as you can



function bubbleSort(arr) {
    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j + 1] < arr[j]){
               swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.table(bubbleSort([10,8,5,2,1,6,3,9]))