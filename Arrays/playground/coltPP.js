/*
write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits
Time complexity must be O(N)

*/



// function sameFrequency(int1, int2){
//     if(int1.length !== int2.length)return false

//     let same = {}

//     for(let i = 0; i < int1.length; i++) {
//         let num = int1[i]
//         same[num] ? same[num]+= 1 : same[num] = 1
//     }

//     for(let i = 0; i < int2.length; i++) {
//         let num2 = int2[i]
//         !same[num2] ? false : same[num2] -= 1

//     }
//  return true

// }

// console.log(sameFrequency([2,4,6,8], [3,6,9,12]))


// function sameFrequency2(int1, int2) {
//     if(int1.length !== int2.length) return false

//     let num1 = {}
//     let num2 = {}

//     for(i in int1) {
//         num1[i] = (num1[i] || 0) + 1
//     }

//     for(key in int2) {
//         num2[key] !== num1[key] ? false : true
//     }
//     return true
// }


// console.log(sameFrequency2([1,2,3], [1,2,3,4]))


/// implement a function called areThereDuplicates which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in 
// this can be solved with a frequency counter or multiple pointers ting

// const areThereDuplicates = (...arr) => {
//     arr.sort((a,b) => a.toString().localeCompare(b.toString()))

//     let isDuplicate = []
    
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i + 1] ){
//             isDuplicate.push(arr[i])
//         }
//     }
//     return isDuplicate.length > 0 
// }

// console.log(areThereDuplicates(1,'s','1',1))



/*
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

*/
                       //m    //l
// function constructNote(str1, str2) {
//     let message = {}
//     let letters = {}

//     for(s of str1){
//         message[s] = (message[s] || 0) + 1

//     }

//     for(s of str2) {
//         letters[s] = (letters[s] || 0) + 1
//     }

//     for(key in message){
//         if(!letters[key] || letters[key] < message[key]) {
//             return false
//         }
//         if(message[key] === 0){
//             return true
//         }

//     }
//   return true
// }

// console.log(constructNote("chicken","sting"))





// ///// using a single object 

// function constructNote2(message, letters) {
//     //if the message is empty its fine as long as there are letters
//     if(message.length === 0) return true 
//     //if there are no letters than you cant construct the message
//     if(letters.length === 0 ) return false 

//     //create the hash map
//     let lettersMap = {}

//     //loop through the letters and add it to the hash map
//     for(char of letters) {
//         lettersMap[char] = (lettersMap[char] || 0 ) + 1
//     }

//     // loop through the message and see if the letters exist in the message
//     for(char of message) {
//         //if they don't exist, then return false. because you cant make the message
//         // without the letters 

//         if(!lettersMap[char]) {
//             return false
//         }
//         lettersMap[char]--
//     }
   
//     return true 
// }

// console.log(constructNote2("thisisfun", "thisisfun"))


/*
Given an array of positive integers, 
some elements appear twice and others appear once. 
Find all the elements that appear twice in this array. 
Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/



// function findAllDuplicates(arr){
//     // object to hold the number of occurrences of an element
//      counts = {}
//     // houses the unique values or the ones that occur more than once
//     const duplicates = new Set()

//     // loop through the array and if it exists then add it to the set
//     // otherwise initialize it to one
//     for(const num of arr){
//         if(counts[num]){
//             duplicates.add(num)
//         }else {
//             counts[num] = 1
//         }
//     }
//     // set isn't a true array so use the Array.from to turn the set of unique values into an array
//  return Array.from(duplicates)
    

// }

// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))


// function findAllDuplicates2(arr){
//     // counts the number of times that number occurs in the array
//     const counts = {}
//     // this will house the duplicates
//     duplicates = []

//     // loop through the array
//     for(let i = 0; i < arr.length; i++){
//         // variable to hold the elements of the array for which we are tracking
//         const num = arr[i]
//         //if the number exists in the object then increment it
//         if(counts[num]){
//             counts++
//         // otherwise initialize it to one
//         }else {
//             counts = 1
//         }
//     }

//     // loop through the keys in the object 
//     for(num in counts){
//     // if the values of the keys are greater than one 
//     // basically if there is more than one occurrence
//         if(counts[num] > 1 ){
//     // push it to the duplicates array
//             duplicates.push(Number(num))
//         }
//     }
//     // return the array that houses the duplicates
//     return duplicates 
// }


// function isSubsequence(str1, str2) {
//     let i = 0
//     let j = 0

//     while(i < str1.length && j < str2.length){
//         str1[i] === str2[j] ? i++ : j++
//     }

//    return i === str1.length

// }

// console.log(isSubsequence("abc", "abc"))

//given am unsorted array  and a number n
//find if there exists a pair of elements in the array whose difference is n
//if so the function will return true else false

/*
findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false

*/
// function findPair(arr, n) {
//     if (arr.length === 0) return false;

//     // Use a set to store elements for quick lookup
//     let set = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         // Check if the difference with any previously seen element matches 'n'
//         if (set.has(arr[i] + n) || set.has(arr[i] - n)) {
//             return true;
//         }

//         // Add the current element to the set
//         set.add(arr[i]);
//     }

//     return false;
// }


// console.log(findPair([0,1,3,4,6],-2))




// function firstDuplicate(arr){
//     if(arr.length === 0)return null

//     let set = new Set()

//     for(let i = 0; i < arr.length; i++) {
//             if(set.has(arr[i])){
//                 return arr[i]
//             }
//         set.add(arr[i])
//     }
//     return null
// }

// console.log(firstDuplicate([1,3,4,5,6,4,3]))




// function firstNonRepeatingChar(str) {
//     if(str.length === "") return null 

//     let seen = new Set()
//     let count = {}

//     for(let char of str) {
//         count[char] = (count[char] || 0) + 1
//         seen.add(char)
        
//     }

//     for(let char of seen){
//         if(count[char] === 1){
//             return char
//         }
//     }
//     return null 
// }

// console.log(firstNonRepeatingChar("aabbccde"))


function firstUniqueChar(str) {
    if (str.length === 0) return null;
  
    let map = new Map();
    // Step 1: Count character frequencies using Map
    for (let char of str) {
      // your code here
    map.set(char,(map.get(char) || 0) + 1) 

    }

    // Step 2: Find the first character with a count of 1
    for (let char of str) {
        if(map.get(char) === 1){
            return char
        }
    }

    return null;

    }

  console.log(firstUniqueChar("abacabad")); // "c"

  /*

  Given an array of integers and a number, write a function called maxSubarraySum, 
  which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
  
  */


function maxSubArraySum(arr) {
  let maxSum = 0
  let tempSum = 0

  if(arr.length < num) return null 
  for(let i = 0; i < num; i++){
    maxSum+= arr[i]
  }

  tempSum = maxSum
  for(let i = 0; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum

}
console.log(maxSubArraySum([100,200,300,400]))