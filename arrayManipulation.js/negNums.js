/*
Absolutely! Here's another variation of this problem for you to practice moving elements **in place**.

---

### Problem: **Move All Negative Numbers to the Beginning**
Write a function that takes an array of integers and rearranges it so that all negative numbers are moved to the beginning of the array, while maintaining the relative order of the other numbers.

#### Example Input:
```javascript
moveNegatives([1, -3, 2, -5, 4, -1]);
```

#### Expected Output:
```javascript
[-3, -5, -1, 1, 2, 4]
```

### Constraints:
- Do it **in-place** without creating a new array.
- Your solution should work for any array length, including empty arrays or arrays with no negative numbers.

---

### Hint:
- Use a similar approach to the previous problems: **two pointers**.
- Keep track of the position where the next negative number should go.
- Swap negative numbers into their correct positions.

---

Try solving it, and I'll be here to review or assist! 😊
*/


const negNums = (array) => {
   let negative = 0 

   for(let i = 0; i < array.length; i++) {
    if(array[i] < 0) {
        [array[negative], array[i] = array[i], array[negative]]
        negative++
    }
   }
   return array
}

console.log(negNums([1, -3, 2, -5, 4, -1]))