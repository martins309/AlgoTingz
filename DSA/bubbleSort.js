//write me a bubble sort without the comparator 
// as best as you can



function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}