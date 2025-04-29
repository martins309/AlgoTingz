/*
write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits
Time complexity must be O(N)

*/



function sameFrequency(int1, int2){
    if(int1.length === 0 || int2.length === 0)return null

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