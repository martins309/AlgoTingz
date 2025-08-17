//this is the insertion sort algorithm once with and  without the comparator



function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j

        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = j
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort([4,6,8,9,7,3,2,1,4,3]))