# Selection Sort

##
| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|   O(n log n)    |       O(n)       |



> merge sort works by having an initial helper method to merge an already sorted array
- initialize the iterables (i) & (j) and then an empty array to push the numbers into
- while the iterables are less than the length of the array
    - if the first int in the second array is larger than the first int in the first array
    - then push the first int in the first array to the empty array that we called results
        - else push the first element of the second array into the results array
        - increment the interables to move on to the next element
        - rinse and repeat
    - after this we have two more while loops to ensure that we don’t have any elements that are left over in the event that maybe we have an uneven array [3], [4]
    - return the results
        - should return a merge sorted array


```js
function mergeArr(arr1, arr2){
    let i = 0
    let j = 0
    let results = []

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }

    return results
}

```

> In the main function, you have a a conditional that states that, if the length of the array is one or less, than return
    - because this is a merge sort, we need to work on both sides of the array by splitting it in half
        - you have a mid variable - which is taking the array and dividing it by 2 and floor the decimal
        - a left variable that recursively calls the merge sort function ( starts from 0 and goes to the middle of the array with the slice)
        - a right variable that does a second recursive call from mid to the end of the array
        - then return merged array(left, right)
            - this will return the merged array


```js

    function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return mergeArr(left, right)

}

console.log(mergeSort([2,5,7,1,9,8]))

```

### Time Complexity of Merge Sort 

- Is O(n log n) because we have to break the array down into smaller parts
-when we are breaking down the array we are essentially doing O(log n) decompositions
    - and O(n) comparisons per decomposition

- like this for example

!(DSA/pisha/msBO.png)

                  


