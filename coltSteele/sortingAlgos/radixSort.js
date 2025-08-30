//radix sort helper methods

/*
use the getDigit(num, place)
returns the digit in num at the given place value
*/




function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1

}