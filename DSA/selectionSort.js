//im gonna try to do this from memory
// its cool if i cant lol 


function selectionSort(arr, comparator){

    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    for (let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(comparator(arr[j], arr[min])){
                min = j 
            }
            
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr
}
function comparator(a, b) {
    return a > b ? 1 :
    a < b ? -1 : 0
}


console.table(selectionSort(["noodle", 'chicken', 'soup', 'lycan', 'baboozled'], comparator))