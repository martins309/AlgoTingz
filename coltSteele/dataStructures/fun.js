//here we are going to test what i remember purely based of logic and understanding 

//here we go!!


//Bubble Sort Ting Them.... 

function bubbleSort(arr, comparator) {
    let noSwap

    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }

    for(let i = arr.length; i > 0; i--) {
        noSwap = false
        for(j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
                swap(arr, j, j + 1)
                noSwap = true
            }
        }
    }
    return arr
}

function comparator(a, b){
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.table(bubbleSort(["nugget", "chicken", "ass", "burger"], comparator))