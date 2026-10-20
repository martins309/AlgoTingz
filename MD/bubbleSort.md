# Bubble Sort


## Big O 
| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|    O(n)^2       |       O(1)       |



> When we do the bubble sort, we are setting arr.length to start at the end of the array.
> Doing so will allow us to use the i definition in the second loop

```js
for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if((arr[j] < arr[j + 1])){
                swap(arr, j, j + 1)
            }
        }
    }

```
- j now runs while j < i - 1
- as i goes down, so does j

### Time Complexity of Bubble Sort

- is o(n)^2 because of the nested loop and we are making a comparison for each item in the array so we are therefore making n number of comparisons
- if the array is nearly sorted, and has the no swap variable in there, it becomes linear time or o(n)

### Bubble Sort With Comparator (for sorting different data types)

```js
function bubbleSort(arr, comparator) {
    if(typeof comparator !== 'function'){
        comparator = function(a, b) {
            return a - b
        }
    }
    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
               swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function comparator(a, b) {
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.table(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], comparator))

```
