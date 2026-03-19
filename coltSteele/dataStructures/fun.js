

function bubbleSort(arr, comparator){
    function swap(idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    if(typeof comparator != 'function'){
        comparator = function(a ,b){
            return a - b
        }
    }
}