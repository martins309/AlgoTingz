//practice the sorting algorithms that we've learned so far


//give it a go


//bubble sort ting


function bubbleSort(arr, comparator) {
    let noSwap
    if(typeof comparator !== 'function'){
        comparator = function(a, b) {
            return a - b
        }
    }
    for(let i = arr.length; i > 0; i--) {
        noSwap = true
        for(let j = 0; j < i - 1; j++) {
            if(comparator(arr[j], arr[j + 1]) > 0){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false

            }
        }
        if(noSwap) break 
    }
    return arr
}

function comparator(a, b) {
    if(a > b) return 1
    if(a < b) return -1
    return 0
}