# Insertion Sort

##
| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|     O(n)^2      |       O(1)       |



> we can start at the second index and go to the end assuming the first part or element is sorted

- then we do a second loop and start at i - 1 and do a backwards comparison
    - the purpose of the second loop (j = i -1; j ≥ 0 && arr[j] > currenVal; j++)
        - currentVal again is whatever arr[i] is 
                j cv
        -[3,1,2,6,5]
        - like this
    - is to take the current value and moving it forward and then stopping at some point
        - arr[j + 1] = arr[j] → (which is i -1) is how to move the value forward
    - after the first loop finishes then that means we found the correct position to insert the current value
    - so to insert the current value we assign the current value to arr[j + 1] or arr[j + 1] = currentVal and then return the arr at the end

    ```js

    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]

        let j 
        for(j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr

    ```

### Time Complexity of Insertion Sort 

- is also o(n^2) because of the nested loops that compares every element in the array to every other element in the array.
- as the array grows in each loops we are making n^2 comparison
- if want to minimize the number of swaps that happen, use the selection sort because you only make one swap at the end of each loop.
- otherwise its not very good lol


### Insertion Sort With Comparator (for sorting different data types)

```js

function insertionSort(arr, comparator) {
    if(typeof comparator !== 'function') {
        comparator = function(a, b) {
            return a - b
        }
    }
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]

        let j 
        for(j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

function comparator(a, b) {
    return a > b ? 1 :
    a < b ? -1 : 0
}

console.table(insertionSort(["what", "am", "i", "doing"], comparator))

```