//Given a sorted array and a number, write a function called sortedFrequency 
//That counts the occurrences of the number in the array




// function sortedFrequency(arr, num){
//     function findFirst() {
//         let left = 0
//         let right = arr.length -1 
//         let result = -1

//         while(left <= right){
//             let middle = Math.floor((left + right) / 2)
//             if(arr[middle] === num){
//                 result = middle
//                 right = middle - 1
//             } else if (arr[middle] < num){
//                 left = mid + 1
//             } else{
//                 right = middle - 1
//             }
//         }
//         return result
//     }
    
//     function findLast(){
//         let left = 0 
//         let right = arr.length -1
//         let result = -1

//         while(left <= right){
//             let middle = Math.floor((left + right ) / 2)
//             if(arr[middle] === num){
//                 result = middle
//                 left = middle + 1
//             }else if(arr[middle] < num){
//                 left = middle + 1 
//             }else {
//                 right = middle - 1
//             }
//         }
//         return result 
//     }

//     let first = findFirst()
//     if(first === -1) return -1
//     let last = findLast()

//     return last - first + 1
// }






//look ma no hands lol

function sortedFrequency(arr, num){
    function findFirst(arr, num){
        let first = 0
        let end = arr.length -1
        let result = -1

        while(left <= right){
            let middle = Math.floor((left + right) / 2)
            if(arr[middle] === num){
                result = middle
                right = middle -1
            }else if(arr[middle] < num){
                left = middle + 1
            }else {
                right = middle - 1
            }
        }
        return result
    }

    function findLast(arr, num){
        let first = 0 
        let last = arr.length - 1
        let result = -1

        while(left <= right){
            let middle = Math.floor((left + right) / 2)
            if(arr[middle] === num){
                result = middle
                left = middle + 1
            }else if(arr[middle] < num){
                left = middle + 1
            }else {
                right = middle - 1
            }
        }
        return result
    }

    let first = findFirst()
    if(first === -1) return -1
    let last = findLast()

    return last - first + 1
}

console.log(sortedFrequency([1,2,2,2,2,2,3], 2))





