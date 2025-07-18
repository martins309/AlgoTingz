//Given a sorted array and a number, write a function called sortedFrequency 
//That counts the occurrences of the number in the array


// here is the colt steele solution for the sorted frequency parttern 


function sortedFrequency(arr, num){
    function findFirst() {
        let left = 0
        let right = arr.length -1 
        let result = -1

        while(left <= right){
            let middle = Math.floor((left + right) / 2)
            if(arr[middle] === num){
                result = middle
                right = middle - 1
            } else if (arr[middle] < num){
                left = mid + 1
            } else{
                right = middle - 1
            }
        }
        return result
    }
    
}

