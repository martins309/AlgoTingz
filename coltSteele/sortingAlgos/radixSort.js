//radix sort helper methods

/*
use the getDigit(num, place)
returns the digit in num at the given place value
*/




function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
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