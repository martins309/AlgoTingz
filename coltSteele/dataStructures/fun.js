//here we are going to test what i remember purely based of logic and understanding 

//here we go!!




function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(j = 0; j < i - 1; j++){
            if(arr[j] < arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.table(bubbleSort([9,3,57,4,8,3,1]))