// So the AI is going to help me with the logic patterns that I seem to have 
// Trouble with. I really want to get better so I will make haste


/*

---

## 🧠 PROBLEM 1: Net Change in Pairs (Easy)

You are given an array of **flat numbers**, where every two numbers form a pair: `[incoming, outgoing]`. 
Return the total net change (incoming - outgoing) across all pairs.

### ➕ Example:

```js
netChange([5, 3, 10, 2, 8, 5]) // → 13
// (5 - 3) + (10 - 2) + (8 - 5) = 2 + 8 + 3 = 13
```
Rules:

* Array will always contain an **even number of elements**.
* Each pair is `[in, out]`.

---

Try coding it out. Don't worry if you get stuck — send me **whatever you come up with**, even partial code, and I’ll help guide you from there. Once you're done with Problem 1, I’ll give you Problem 2.


*/

// function netChange(array) {
//     if(array.length === 0) return null
    

//     let net = 0

//     for(let i = 0; i < array.length; i+= 2){
//         net += array[i]
//         net -= array[i + 1]
//     }
//     return net
// }
// console.log(netChange([5,3,10,2,8,5]))

//works on array of arrays

// function netChange(array) {
//     if(array.length === 0) return null

//     return array.map(x => x[0] - x[1]).reduce((x,y) => x + y)
// }
// console.log(netChange([[5,3],[10,2],[8,5]]))

// function netChange(array) {
//     if(array.length === 0) return null

//     let net = 0

//     for(let i = 0; i < array.length; i++){
//         net += array[i][0]
//         net -= array[i][1]
//         console.log(net)
//     }
//     return net
// }
// console.log(netChange([5,3,10,2,8,5]))



/*
Awesome — you're warmed up now. 🔥
**Problem 2** will stretch your logic a bit more 
but still build on that pattern of **pairwise logic + running total**.

---

## 🧩 PROBLEM 2: 🏦 Deposit Tracker (with Conditions)

You are given a **flat array** of numbers, where every two numbers form a pair:

* The **first number** in each pair is the **amount of money** involved in a transaction.
* The **second number** is a **code**:

  * `1` means it's a **deposit**
  * `0` means it's a **withdrawal**

Return the **final balance**, starting from **0**.

---

### 📌 Example:

```js
trackBalance([100, 1, 50, 0, 25, 1, 80, 0]) // ➞ -5
// +100 (deposit)
// -50  (withdrawal)
// +25  (deposit)
// -80  (withdrawal)
// Total: 100 - 50 + 25 - 80 = -5
```

---

### ✅ Rules:

* You start with a balance of **0**.
* Every pair is `[amount, type]`
* `type` is either `1` (deposit) or `0` (withdrawal)

---

Try it out! When you're ready, send me:

* Your code (even if broken)
* What you think it's doing
* And any spot you're unsure about

I’ll help from there if needed — or tell you when to flex 💪 and move on to Problem 3.

*/

// function depositTracker(arr){
//     if(arr.length === 0 ) return null

//     let balance = 0

//     for(let i = 0; i < arr.length; i+=2){
//         if(arr[i + 1] === 1){
//             balance += arr[i]

//         } else if(arr[i + 1] === 0 ) {
            
//             balance -= arr[i]
//         }

//     }
//     return balance 

// }

// console.log(depositTracker([100, 1, 50, 0, 25, 1, 80, 0]))


/*

YESSS that’s the mindset. Every “almost” is just a rep at the mental gym. 💪 You're leveling up every time.

---

## 🧩 PROBLEM 3: 🛍️ Store Inventory Tracker

You’re managing stock for a store. You're given a flat array where each **three elements** represent a transaction:

```
[amount, type, itemId]
```

* `amount`: number of items
* `type`: `"add"` or `"remove"` (as strings)
* `itemId`: a string ID for that product

### 🧠 Your Task:

Return an **object** showing how many items remain in stock for each itemId.

---

### 🔢 Example:

```js
trackInventory([
  10, "add", "apple",
  4, "remove", "apple",
  3, "add", "banana",
  1, "remove", "banana"
])
```

### ✅ Output:

```js
{
  apple: 6,
  banana: 2
}
```

---

### 📌 Constraints:

* You can assume there are no negative quantities (no over-removing).
* The array always comes in clean sets of 3 elements.
* Start all inventory counts at `0` (don’t prefill anything).

---

### 🧪 Hint:

You're working in **chunks of 3**, so a `for` loop using `i += 3` is 🔑.

---

Give it a try. Send me your code, and if it goes sideways, I’ll help untangle it. Let’s go 🔥




*/


function inventoryTracker() {
    //ill be back 
}