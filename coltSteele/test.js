//this will be a radix test 

//here we go 




function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num){
    if(num === 1) return 1
    return(Math.floor(Math.log10(Math.abs(num)))) + 1
}

function mostDigits(nums){
    let max = 0
    for(let i = max; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]))
    }
    return max
}

console.log(mostDigits([1,22,3,66545,47898465,1235]))
       