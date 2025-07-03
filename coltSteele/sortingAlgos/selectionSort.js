/*
store first element as the smallest value that you've seen
compare this item to the next item in the array until you find a smaller number
if the smaller number is found, designate the smaller number to be the new min and 
continue until the end of the array
if the minimum is not the value (index) you initially began with
swap the two values
repeat this with the next element until the array is sorted



*/


// function selectionSort(arr){

//     for(let i = 0; i < arr.length; i++) {
//         let min = i
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j]< arr[min]) {
//                 min = j
//         }

        
//     }   
//     if(i !== min){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
    
//         }

//     }
//     return arr
// }

// console.log(selectionSort([22,4,5,67,4,17,6]))



function selectionSort(arr, comparator){
    if(comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(comparator(arr[min], arr[j])){
                min = j
            }
        }
        if(i !== min) {
            let temp = min
            min = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

function comparator(a, b){
    if(a > b) return -1
    if(a < b) return 1
    return 0
}