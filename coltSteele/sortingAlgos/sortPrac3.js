

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

function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right){
        let pivot = partition(arr, left, right)

        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }

    return arr
}

console.log(quickSort([5,6,7,89,777,1,2,3,4]))