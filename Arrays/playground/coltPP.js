/*
write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits
Time complexity must be O(N)

*/



function sameFrequency(int1, int2){
    if(int1.length !== int2.length)return false

    let same = {}

    for(let i = 0; i < int1.length; i++) {
        let num = int1[i]
        same[num] ? same[num]+= 1 : same[num] = 1
    }

    for(let i = 0; i < int2.length; i++) {
        let num2 = int2[i]
        !same[num2] ? false : same[num2] -= 1

    }
 return true

}

console.log(sameFrequency([2,4,6,8], [3,6,9,12]))


function sameFrequency2(int1, int2) {
    if(int1.length !== int2.length) return false

    let num1 = {}
    let num2 = {}

    for(i in int1) {
        num1 = (num1[i] || 0) + 1
    }

    for(key in int2) {
        num2[key] !== num1[key] ? false : true
    }
    return true
}


