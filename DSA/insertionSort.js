//now to write the insertion sort






function insertionSort(arr, comparator) {
    if(typeof comparator !== 'function') {
        comparator = function(a, b) {
            return a - b
        }
    }
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]

        let j 
        for(j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

function comparator(a, b) {
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.table(insertionSort(["what", "am", "i", "doing"], comparator))