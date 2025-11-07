//this will be a radix test 

//here we go 




function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i))
}


function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let max = digitCount(nums)
    for (let i = 0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]))
    }

    return max
}

console.log(mostDigits([3,4,6,663,3,44,2434324,642343]))