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
//quick sort and insertion sort tomorrow






function partition(arr, start = 0, end = arr.length - 1){

    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivotPoint = arr[start]

    let swapIdx = start

    for(let i = start; i < end; i++){
        if(pivot > arr[start]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
        swap(arr, start, pivotPoint)
    }
    return swapIdx
}


function quickSort(arr, left = 0, right = arr.length - 1){
    
    let pivotIdx = partition(arr, left, right)

    if(left < right){
        quickSort(arr, left, pivotIdx -1)
        quickSort(arr, pivotIdx + 1, end)
    }
    return arr
}