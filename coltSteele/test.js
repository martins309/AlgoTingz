//this will be a radix test 

//here we go 




function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}


function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let max = 0
    for (let i = 0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]))
    }

    return max
}


function radixSort(nums){
    let count = mostDigits(nums)
    for (let k = 0; k < count; k++){
        let buckets = Array.from({ length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            buckets[getDigit(nums[i], k)].push(nums[i])
        }
       nums = [].concat(...buckets)
    }
    return nums
}

console.table(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))