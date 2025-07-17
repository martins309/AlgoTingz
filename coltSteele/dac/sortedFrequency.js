//Given a sorted array and a number, write a function called sortedFrequency 
//That counts the occurrences of the number in the array



function sortedFrequency(arr, num) {
    let left = 0
    let right = arr.length - 1 
    let count = 0
    

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        if(arr[middle] === num) {
            count = arr[middle]
            right = middle - 1
        }else {
            left = middle + 1
        }
        
    }
    
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2))