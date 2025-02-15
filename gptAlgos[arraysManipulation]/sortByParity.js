/*
Absolutely! Here's a problem for you to practice both array manipulation and applying the swapping technique:

---

### **Problem: Sort Array by Parity**

You are given an array of integers `nums`. Move all the even integers to the beginning of the array followed by all the odd integers.  

You should do this **in-place** without creating a new array.

---

### **Example:**

#### Input:
```javascript
nums = [3, 1, 2, 4]
```

#### Output:
```javascript
[2, 4, 3, 1]
```

**Explanation:**
- The even numbers `[2, 4]` are at the beginning.
- The odd numbers `[3, 1]` come afterward.
- The order of even and odd numbers within their groups does not matter.

---

### **Constraints:**
1. The array can contain both positive and negative integers.
2. You must solve the problem in **O(n)** time using the two-pointer technique.
3. Do not create a new array. Perform the operation in-place.

---

This problem will give you an opportunity to practice:
- Using two pointers for in-place array modification.
- Applying the swapping technique to rearrange the elements efficiently.

Let me know when you attempt it, and I can review your solution! 😊


*/



const parity = (array) => {
    let evenNum = 0
    
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            [array[evenNum], array[i]] = [array[i], array[evenNum]]
            evenNum++
        }
    }
    return array
}

console.log(parity([3,1,2,4]))