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

// function sortedFrequency(arr, num){
//     function occ1(){
//         let left = 0
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right ){
//             let mid = Math.floor((left + right ) / 2)

//             if(arr[mid] === num){
//                 result = mid
//                 right = mid - 1
//             }else if (arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }
//     function occ2(){
//         let left= 0 
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right){
//             let mid = Math.floor((left + right ) / 2)

//             if(arr[mid] === num){
//                 result = mid
//                 left = mid + 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }

//     let first = occ1()
//     if(first === -1) return -1
//     let last = occ2()

//     return last - first + 1
// }

// console.log(sortedFrequency([1,3,4,4,4,4,5,6,7], 4))


















//start here

// function sortedFreak(arr, num){
//     function num1(){
//         let left = 0
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right){
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === num){
//                 result = mid
//                 right = mid - 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//       return result
//     }

//     function num2(){
//         let left = 0 
//         let right = arr.length - 1
//         let result = -1

//         while(left <= right) {
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === num){
//                 result = mid
//                 left = mid + 1
//             }else if(arr[mid] < num){
//                 left = mid + 1
//             }else {
//                 right = mid - 1
//             }
//         }
//         return result
//     }

//     let first = num1()
//     if(first === -1) return -1
//     let last = num2()

//     return last - first + 1
// }

// console.log(sortedFreak([1,2,3,4,5,5,5,5,5,6,7,8,15,34,56,78,88,99], 5))





//recursive call 

// function sortedFrequency(arr, num) {
//     let firstIdx = findFirst(arr, num)
//     if(firstIdx === -1) return -1
//     let lastIdx = findLast(arr, num)
//     return lastIdx - firstIdx + 1


//     function findFirst(low = 0, high = arr.length -1 ){
//         if(high >= low) {
//         let mid = Math.floor((left + right) / 2)
//             if((mid === 0 || num > arr[mid - 1]) && arr[mid] === num ){
//                 return mid
//             } else if(num > arr[mid]){
//                 return findFirst(arr, num, mid + 1, high)
//             } else {
//                 return findFirst(arr, num, low, mid - 1)
//             }
//         }
//         return -1 
//     }

//     function findLast(low = 0, high = arr.length - 1){
//         if(high >= low){
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === arr.length - 1 || num < arr[mid + 1] && arr[mid] === num) {
//                 return mid
//             }else if(num < arr[mid] ){
//                 return findLast(arr, num, low, mid -1)
//             } else {
//                 return findLast(arr, num, mid + 1, high)
//             }
//         }
       
//     }
//     return -1 
// }








// function sortedFrequency(arr, num){
//     let firstIdx = findFirst(arr, num)
//     if(firstIdx === - 1) return -1
//     let lastIdx = findLast(arr, num)

//     return lastIdx - firstIdx + 1

//     function findFirst(arr, num, low = 0, high = arr.length - 1){
//         while(high >= low){
//         let mid = Math.floor((low + high) / 2)
//         if(mid === 0 || num > arr[mid - 1] && arr[mid] === num){
//             return mid 
//         }else if(num > arr[mid]){
//             return findFirst(arr, num, mid + 1, high)
//         }else {
//             return findFirst(arr, num, low, mid - 1)
//         }

//         }
        
//         return -1 
//     }

//     function findLast(arr, num, low = 0, high = arr.length - 1){
//         while(high >= low){
//             let mid = Math.floor((low + high) / 2)
//             if(mid === arr.length -1 || num < arr[mid + 1] && arr[mid] === num){
//                 return mid
//             }else if(num < arr[mid]){
//                 return findLast(arr, num, low, mid - 1)
//             }else {
//                 return findLast(arr, num, mid + 1, high)
//             }
//         }
//     }
//     return - 1

// }

// console.log(sortedFrequency([1,2,3,4,4,4,4,5,6,7,8,9], 4))







//you needed to find the pivot point first and then work with that

// function findRotatedIndex(array, num) {
//   var pivot = findPivot(array)
//   if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//     return binarySearch(array, num, 0, pivot - 1);
//   } else {
//     return binarySearch(array, num, pivot, array.length - 1);
//   }
// }
 
// function binarySearch(array, num, start = 0, end = array.length - 1) {
//   if (array.length === 0) return -1;
//   if (num < array[start] || num > array[end]) return -1;
 
//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (array[mid] === num) {
//       return mid;
//     } else if (num < array[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }
 
// function findPivot(arr) {
//   if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//   var start = 0
//   var end = arr.length - 1;
//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (arr[mid] > arr[mid + 1]) return mid + 1
//     else if (arr[start] <= arr[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
// }






function findRotatedIndex(arr, num) {
  if(arr.length === 0) return -1
  if (arr.length === 1) return arr[0] === num ? 0 : -1 

  let pivot = pivotPoint(arr)

  if(arr[pivot] === num) return pivot

  if(pivot === 0 || num >= arr[0]){
    return binarySearch(arr, num, 0, pivot - 1)
  } else{
    return binarySearch(arr, num, pivot, arr.length - 1)
  }

}



function pivotPoint(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Not rotated at all
    if (arr[left] < arr[right]) return 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > arr[mid + 1]) return mid + 1;
        if (arr[mid - 1] > arr[mid]) return mid;

        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 0;
}



function binarySearch(arr, target, left, right){

  while(left <= right){
    mid = Math.floor((left + right) / 2)
    if(arr[mid] === target) {
      return mid
    } else if(arr[mid] < target){
      left = mid + 1
    } else{
      right = mid - 1
    }
  }
  return -1

}


console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5
