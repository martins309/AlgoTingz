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



//
