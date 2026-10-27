//write me a bubble sort without the comparator 
// as best as you can



function bubbleSort(arr, comparator) {
    if(typeof comparator !== 'function'){
        comparator = function(a, b) {
            return a - b
        }
    }
    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
               swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function comparator(a, b) {
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.table(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))