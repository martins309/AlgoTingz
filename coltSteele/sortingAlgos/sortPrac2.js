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










// function mergeArr(arr1, arr2){
//      let results = []
//      let i = 0
//      let j = 0

//      while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//      }

//      while(i < arr1.length){
//         results.push(arr1[i])
//         i++
//      }

//      while(j < arr2.length){
//         results.push(arr2[j])
//         j++
//      }

//      return results
// }







// function mergeSort(arr, comparator){
//    if(arr.length <= 1) return arr

//    let mid = Math.floor(arr.length / 2)
//    let left = mergeSort(arr.slice(0, mid), comparator)
//    let right= mergeSort(arr.slice(mid), comparator)
   
//    return mergeArr(left, right, comparator)
// }


// const comparator = (a, b) => 
//     a > b ? 1 :
//     a < b ? -1 : 0

// console.log(mergeSort(['zebra', 'anul', 'grepption', 'doofus'], comparator))
















// function mergeArr(arr1, arr2, comparator){
//    if(typeof comparator !== 'function'){
//       comparator = function(a, b) {
//          return a - b
//       }
//    }
//    let i = 0
//    let j = 0
//    let results = []

//    while(i < arr1.length && j < arr2.length){
//       if(comparator(arr2[j], arr1[i]) > 0){
//          results.push(arr1[i])
//          i++
//       } else {
//          results.push(arr2[j])
//          j++
//       }
//    }

//    while(i < arr1.length){
//       results.push(arr1[i])
//       i++
//    }

//    while(j < arr2.length){
//       results.push(arr2[j])
//       j++
//    }
//       return results
// }




// function mergeSort(arr, comparator){
//    if(arr.length <= 1) return arr

//    let mid = Math.floor(arr.length / 2)
//    let left = mergeSort(arr.slice(0, mid), comparator)
//    let right = mergeSort(arr.slice(mid), comparator)
//    return mergeArr(left, right,  comparator)
// }


// function comparator(a, b){
//    return a > b ? 1 :
//    a < b ? -1 : 0
// }

// console.table(mergeSort(['i', 'like', 'chicken', 'alot'], comparator))







// function selectionSort(arr, comparator){
//    if(typeof comparator !== 'function'){
//       comparator = function(a, b){
//          return a - b
//       }
//    }
//    function swap(arr, idx1, idx2){
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//    }
//    for(let i = 0; i < arr.length; i++){
//       let min = i
//       let j = i + 1
//       while(j < arr.length){
//          if(comparator(arr[min], arr[j]) > 0){
//             min = j
//          }
//          j++
//       }
//       if(i !== min) swap(arr, i, min)
//    }
//    return arr
// }

// function comparator(a, b) {
//    return a > b ? 1 :
//    a < b ? -1 : 0
// }

// console.table(selectionSort(['chicken', 'is', 'fum', 'as', 'fuck'], comparator))








// function mergeArr(arr1, arr2){
//    let results = []
//    let i = 0
//    let j = 0

//    while(i < arr1.length && j < arr2.length){
//       if(arr2[j] > arr1[i]){
//          results.push(arr1[i])
//          i++
//       } else {
//          results.push(arr2[j])
//          j++
//       }
//    }


//    while(i < arr1.length ){
//       results.push(arr1[i])
//       i++
//    }

//    while(j < arr2.length){
//       results.push(arr2[j])
//       j++
//    }
//    return results
// }


// function mergeSort(arr){
//    if(arr.length <= 1) return arr

   
//       let mid = Math.floor(arr.length / 2)
//       let left = mergeSort(arr.slice(0, mid))
//       let right = mergeSort(arr.slice(mid))
//       return mergeArr(left, right)
   
  
// }


// console.log(mergeSort([3,7,6,1,4]))







// function bubbleGuts(arr, comparator){
//    let noSwap

//     if(typeof comparator !== 'function'){
//       comparator = function(a, b){
//          return a - b
//       }
//    }
//    function swap(arr, idx1, idx2){
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//    }
//    for(let i = arr.length; i > 0; i--){
//        noSwap = true
//       for(let j = 0; j < i - 1; j++){
//          if(comparator(arr[j], arr[j + 1]) > 0){
//             swap(arr, j, j + 1)
//             noSwap = false
//          }
//       }
//       if(noSwap) break
//    }
//    return arr
// }

// function comparator(a, b) {
//    return a > b ? 1 :
//    a < b ? -1 : 0
// }

// console.table(bubbleGuts([300,467,2,1,5674,2,47,32,88,4], comparator))





function selectionSort(arr, comparator){
   if(typeof comparator !== 'function'){
      comparator = function(a, b){
         return a - b
      }
   }
   function swap(arr, idx1, idx2){
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
   }
   for(let i = 0; i < arr.length; i++){
      let min = i
      for(let j = i + 1; j < arr.length; j++){
         if(comparator(arr[min], arr[j]) > 0){
            min = j
         }
      }
      if(i !== min) swap(arr, i, min)
   }
   return arr
}

function comparator(a, b){
   return a > b ? 1 :
   a < b ? -1 : 0
}

console.table(selectionSort([3,5,6,2,66,7,9,4,45], comparator))