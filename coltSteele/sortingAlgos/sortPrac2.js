// this is for the merge sort, quick sort and radix sort

//the main ones are commited to memory and I know how and why they work :)



// function selectionSort(arr, comparator){
//     function swap(arr, idx1, idx2){
//         return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     if(typeof comparator !== 'function'){
//         comparator = function(a, b){
//             return a - b
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(comparator(arr[min], arr[j]) > 0){
//                 min = j
//             }
//         }
//         if(i !== min){
//             swap(arr, i, min)
//         }
//     }
//     return arr
// }

// function comparator(a, b){
//     return a > b ? 1 :
//     a < b ? -1 : 0
// }

// console.log(selectionSort(['chicken', 'is', 'fum'], comparator))










function mergeArr(arr1, arr2){
     let results = []
     let i = 0
     let j = 0

     while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
     }

     while(i < arr1.length){
        results.push(arr1[i])
        i++
     }

     while(j < arr2.length){
        results.push(arr2[j])
        j++
     }

     return results
}


console.