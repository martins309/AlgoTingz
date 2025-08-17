//this is the insertion sort algorithm once with and  without the comparator



function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j = i - 1

        while(j >= 0 && arr[j] > currentVal){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentVal
    }
    return arr
}
console.log(insertionSort([4,5,7,9,6,44,34,7]))

function comparator(a, b){
    return a > b ? 
    1 :
    a < b ? 
    -1 : 0
}