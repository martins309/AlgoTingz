

function partition(arr, start = 0, end = arr.length - 1){

    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

console.table(partition([4,5,6,7,1,2,3]))