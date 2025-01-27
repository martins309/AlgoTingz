// let array = [1,2,3,3,4,54,56,67,3]
// let empty = []

// // for loops

// const loop = () => {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 !== 0){
//             empty[empty.length] = array[i]
//         }
//     }
//     return empty.sort()
// }


// console.log(loop())



// const loop2 = () => {
//     for(num of array) {
//         console.log(num)
//     }
    
// }

// console.log(loop2())

let prices = [7, 1, 5, 3, 6, 4]

const testLoop = (prices) => {
    for(let i = 0; i < prices.length; i++) {
        let j = i + 1
       i > j ? 0 : max = j - i
    }
    return max
    
}

console.log(testLoop())