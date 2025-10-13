// here we will practice the radix sort

// start with the methods obvi and then go from there

function insertionSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j
        for(j = i - 1; j >= 0 && currentVal > arr[j]; j--){
            arr[j + 1] = j
        }
        arr[j + 1] = currentVal
    }
    return arr
}