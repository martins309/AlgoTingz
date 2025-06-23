/*
write a function that accepts an array and a value
loop through the array and check to see if that element is equal 
to the current value. if it is return the index it was found
else return -1
*/



function linearSearch(arr, value){
    if(arr.length === 0 ) return -1 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return arr.indexOf(arr[i])
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6,3], 2))