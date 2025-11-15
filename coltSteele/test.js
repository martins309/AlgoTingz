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

function radixSort(nums){
    let count = mostDigits(nums)
    for(let k = 0; k < count; k++){
        let buckets = Array.from({ length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            buckets[getDigit(nums[i], k)].push(nums[i])
        }
        nums = [].concat(...buckets)
    }
    return nums
}       

console.table(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))





// time for the bubbles to sort


function bubbleSort(arr, comparator){
    let noSwap
    if(typeof comparator !== 'function'){
        comparator = function(a, b){
            return a - b
        }
    }
    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0; i--){
        noSwap = true
        for(let j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
                swap(arr, j, j + 1)
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}

function comparator(a, b){
    return a > b ? 1 : a < b ? -1 : 0
}

console.table(bubbleSort([7,5,3,2,6,4,99,5,65,12,63,4,6,9]))


//this shits in my brain son




function insertionSort(arr, comparator){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j = i - 1
        while(j >= 0 && comparator(arr[j], currentVal) > 0) {
            arr[j + 1] = arr[j]
        }
        j--

        arr[j + 1] = currentVal
    }
    return arr 
}


function comparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}

