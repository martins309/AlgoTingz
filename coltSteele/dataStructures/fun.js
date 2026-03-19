

function bubbleSort(arr, comparator){
    let noSwap
    function swap(idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    if(typeof comparator != 'function'){
        comparator = function(a ,b){
            return a - b
        }
    }

    for(let i = arr.length - 1; i > 0; i--){
        noSwap = true
        for(let j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
                swap(arr, j, j + 1)
                noSwap = false
            }
        }
    }
    return arr
}


function comparator(a , b){
    return a > b ? 1 : a < b ? -1 : 0
}