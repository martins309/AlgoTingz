// so here we are going to study the singly linked list ting



//insertion sort


function insertionSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j = i - 1
        while(j >= 0 && comparator(arr[j], currentVal) > 0){
            arr[j + 1] = arr[j]
            j--
        }
        
        arr[j + 1] = currentVal

    }
    return arr
}

function comparator(a, b){
    return a > b ? 1 : a < b ? -1 : 0
}

console.table(insertionSort([4,12,6,78,5,34]))