# Selection Sort

##
| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|     O(n)^2      |       O(1)       |



> in the first part of the algo, we are trying to find the smallest value that exists in the array starting from the beginning and then comparing every other element from that first position.
    - if there is an element that is smaller, then we will store it the min variable. (min = i)
    - in the second loops, we start at i + 1 so that we dont compare i to the first element, we want to compare i to the second element on
    - then we compare arr[min] to arr[j] to see if the number in the first position is greater then the element in the subsequent position
        - if so then we update the min variable
    - to prevent unnecessary swapping, we have a condition that states that if i ≠ min, if the minimum is not the initial value you started with, then you swap
    - and return the array at the end

    ```js

    for (let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j 
            }
            
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr
    ```

### Time Complexity of Selection Sort 

- is also o(n^2) because of the nested loops that compares every element in the array to every other element in the array.
- as the array grows in each loops we are making n^2 comparison
- if want to minimize the number of swaps that happen, use the selection sort because you only make one swap at the end of each loop.
- otherwise its not very good lol



