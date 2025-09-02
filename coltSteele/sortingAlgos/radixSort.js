//radix sort helper methods

/*
use the getDigit(num, place)
returns the digit in num at the given place value
*/




//for the get digit method the way that it works is that if
//we were looking at a number like 7323 and we're looking at the 100th place
// you divide that number by 10^ i power which is 2 
//then you floor that to get rid of the decimal
// then you do mod 10 to get the answer
//abs is for neg nums

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

//this method shows how many digits there are in a number
function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1

}

//given an array of integers, return the number of digits 
// in the largest numbers in the list
function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}