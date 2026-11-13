// There are two parts to this

// the first function breaks the array apart
//the second one actually sorts it 



function mergeArr(arr1, arr2){
    let i = 0
    let j = 0
    let results = []

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


//remember this only returns one array lol 


function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return mergeArr(left, right)

}

console.log(mergeSort([2,5,7,1,9,8]))