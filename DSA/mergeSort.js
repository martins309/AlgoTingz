// There are two parts to this

// the first function breaks the array apart
//the second one actually sorts it 



function mergeArr(arr1, arr2){
    let i = 0
    let j = 0
    let results = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr[i])
        i++
    }

    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }

    return results
}

console.log(mergeArr([1,3,5], [7,8,9]))



// function mergeSort(arr){
//     return arr 
// }