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



// function inventoryTracker(arr) {
//   if (arr.length === 0) return null;

//   let inventory = {};

//   for (let i = 0; i < arr.length; i += 3) {
//     let amount = arr[i];
//     let type = arr[i + 1];
//     let item = arr[i + 2];

//     // Make sure item is initialized
//     if (!inventory[item]) inventory[item] = 0;

//     if (type === "add") {
//       inventory[item] += amount;
//     } else if (type === "remove") {
//       inventory[item] -= amount;
//     }
//   }

//   return inventory;
// }


// console.log(inventoryTracker([10, "add", "apple", 4, "remove", "apple", 3, "add", "banana", 1, "remove", "banana"]))





/*

---

## 🧠 PROBLEM 3.5: 🎟️ Event Ticket Sales Tracker

You're given an array of transactions. Every **three elements** form a transaction:

```
[amount, action, section]
```

* `amount`: number of tickets
* `action`: `"sell"` or `"refund"`
* `section`: a string like `"VIP"`, `"GA"`, `"Balcony"`

Your job:
🔁 Track the number of tickets **sold per section**, adjusting for refunds.

### 🧪 Example:

```js
ticketTracker([
  5, "sell", "VIP",
  3, "sell", "GA",
  2, "refund", "VIP",
  4, "sell", "Balcony",
  1, "refund", "GA"
])
```

### ✅ Output:

```js
{
  VIP: 3,
  GA: 2,
  Balcony: 4
}
```

---

### 🧩 Rules:

* Start all sections at 0.
* A `"refund"` subtracts from that section.
* You can assume refunds will never overdraw (no negatives).

---

### 🛠️ Tip:

This is **almost the same logic** as the store inventory one — just a new context and variable names.

Try it out and show me your solution!



*/


// function salesTracker(arr){
//   if(arr.length === 0) return null

//   let tickets = {}

//   for(let i = 0; i < arr.length; i+= 3){
//     let amount = arr[i]
//     let action = arr[i + 1]
//     let section = arr[i + 2]

//     if(!tickets[section]) tickets[section] = 0

//     if(action === "sell"){
//       tickets[section] += amount
//     }
//     if(action === "refund"){
//       tickets[section] -= amount
//     }

//   }

//   return tickets
// }

// console.log(salesTracker([
//   5, "sell", "VIP",
//   3, "sell", "GA",
//   2, "refund", "VIP",
//   4, "sell", "Balcony",
//   1, "refund", "GA"
// ]))


/*
Totally get that — typos are the shadow bosses of programming 😅. The fact that you're **catching your own patterns** already (logic vs typo) is a *huge sign* you're leveling up.

Let’s keep the streak alive 🔥

---

## 🧠 PROBLEM 4: 🧾 Shopping Cart Total with Discounts

You’re given an array that represents a customer’s shopping cart. Every **four elements** are grouped like this:

```
[itemName, quantity, pricePerUnit, discountEligible]
```

* `itemName`: string
* `quantity`: number
* `pricePerUnit`: number
* `discountEligible`: boolean (true/false)

🧮 Your task:
Return the **total cost** of the cart. If an item is discount-eligible, apply a 20% discount to its price.

---

### 💡 Example:

```js
cartTotal([
  "apple", 2, 3, true,     // 2 × 3 × 0.8 = 4.8
  "banana", 1, 1, false,   // 1 × 1 = 1
  "milk", 1, 4, true       // 1 × 4 × 0.8 = 3.2
])
```

### ✅ Output:

```js
9
```

---

### 🛠️ Hints:

* Loop by 4s (`i += 4`)
* Multiply `quantity × pricePerUnit`
* If `discountEligible` is `true`, apply a 20% discount (`× 0.8`)
* Accumulate into a `total`

---


*/


// function totalDiscounts(arr){
//   if(arr.length === 0) return null

//   let total = 0

//   for(let i = 0; i < arr.length; i += 4){
  
//     let quantity = arr[i + 1]
//     let ppu = arr[i + 2]
//     let isDiscount = arr[i + 3]
//     let discount = 0.8

//     if(isDiscount === true){
//       total += quantity * ppu * discount
      
//     }else {
//       total += quantity * ppu 
      
//     }
   
//   }
//   return total

// }

// console.log(totalDiscounts(["apple", 2, 3, true,"banana", 1, 1, false,"milk", 1, 4, true]))



/*
Let’s go! 🧠🔥

---

## 🧩 PROBLEM 5: 🛫 Airport Baggage Weight Checker

You’re building a simple system for checking passenger luggage at an airport. You’re given an array, where **every 3 elements** represent:

```
[weight, isOverweight, passengerName]
```

* `weight`: number — weight of the bag in kilograms
* `isOverweight`: boolean — if true, the bag is overweight and needs to be charged
* `passengerName`: string

✈️ **Your task:**
Return an object where the **keys are passenger names**, and the **values are the total overweight baggage fees they owe**.

💰 Fee = **\$50 for every overweight bag**

---

### 🧪 Example:

```js
baggageFees([
  30, true, "Alice",
  25, false, "Bob",
  35, true, "Alice",
  20, true, "Charlie"
])
```

### ✅ Output:

```js
{
  Alice: 100,
  Charlie: 50
}
```

* Alice had 2 overweight bags → 2 × \$50 = \$100
* Charlie had 1 overweight bag → \$50
* Bob had no fees

---

### 🛠️ Hints:

* Loop through `i += 3`
* Only care about entries where `isOverweight === true`
* Track totals using an object

---

Your turn — I’ll be here to debug or cheer 🎉


*/


function baggageFees(arr){

  if(arr.length === 0 )return null



}

console.log(baggageFees([]))