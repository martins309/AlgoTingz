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
            if(comparator(arr[j], arr[min]) < 0){
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


console.table(selectionSort([43,2,1,67,5,12,8], comparator))

////////note////////

//can this sort without the comparator??? if so wtf is it for
//it just sorted without the comparator parameter or me adding it
// in the fucking for loop
// what is going on lolol 


/////////////////////