let array = [1,2,3,3,4,54,56,67,3]
let empty = []

// for loops

const loop = () => {
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            empty[empty.length] = array[i]
        }
    }
    return empty.sort()
}


console.log(loop())



const loop2 = () => {
    for(num of array) {
        console.log(num)
    }
    
}

console.log(loop2())