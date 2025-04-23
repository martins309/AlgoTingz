//this is where we will go when we need to work something out
//this will help us understand our own syntax better cuz you suck lol

// okay so this is the first time  using this to hack it out




//here we will use this for the length of last word algo

// var lengthOfLast = function(s) {
  
//     s = s.trim()

//     let words = s.split(" ")

//     return words[words.length - 1].length 
 
// }

// console.log(lengthOfLast("hello world"))


//buy and sell ting

// so here we are iterating through an array and then returning the difference between 
//stock bought and sold on different days

// const buySell = () => {
    
// }



// var mergedAlternative = function(word1 , word2) {
//     let string = ""
//     let i = 0
//     let j = 0

//     while(i < word1.length || j < word2.length){

//         if(i < word1.length || word1.length > word2.length) {
//             string+= word1[i]
//             i++
//         }
//         if(j < word2.length || word2.length > word1.length) {
//             string+= word2[j]
//             j++
//         }

//         }
//         return string
    
// }

// console.log(mergedAlternative("abcde", "pq"))


// plus equals ting

//play with string manipulation ****

// var plusEqualsTing = function(string) {
//     let newString = ""
//     for(let i = 0; i < string.length; i++) {
//         newString += string[i]
//     }
//     return newString
// }

// console.log(plusEqualsTing("ting"))

//**** */

// the things that i dont know how to do , i can just hack it out!!!


// function countPositivesSumNegatives(input) {
//     // your code here
//       if( !input || input.length === 0) return []
      
//       let positive = 0
//       let negative; 
  
      
//       for(let i = 0; i < input.length; i++) {
//         if(input[i] > 0){
//           positive++
//         }
//         if(input[i] < 0){
//           negative = input.filter(input => input < 0).reduce((a, b) => a + b, 0)
//         }
//       }
//       return [positive, negative]
//   }

//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

//frequency counter 

//given two strings write a function to determine if the second string is an anagram of the first. 
//An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman

function anagram(str1, str2) {
let ana = {}
let gram = {}

str1 === ""  && str2 === "" ? false : true

for(let s of str1) {
  ana[s] = (ana[s] || 0) + 1
}

for(let s of str2) {
  gram[s] = (gram[s] || 0) + 1
}

for(let key in ana) {
  if(ana[key] !== gram[key]) {
    return false 
  }
}
  return true
}
console.log(anagram('qwerty', 'qeywrt'))

//lets refactor tomorrow 


// colts solution

function validAnagram(anagram1, anagram2){
  if(anagram1.length !== anagram2.length) {
      return false;
  }

  
  const checkAnagram = {}
 
  for(let i = 0; i < anagram1.length; i++) {
      let letter = anagram1[i]
      checkAnagram[letter] ? checkAnagram[letter] += 1 : checkAnagram[letter] = 1
  }
  
  for(let i = 0; i < anagram2.length; i++) {
      let letter = anagram2[i]
      if(!checkAnagram[letter]){
          return false
      }else {
          checkAnagram[letter] -= 1
      }
  }
  return true
}

validAnagram("tank", "knat");


// convert string to a number

// const stringToNumber = function(str){
// // put your code here
//   const result = parseInt(str)

//   if(isNaN(result)){
//     return null
//   }
//   return result
// }

// console.log(stringToNumber("123"))



/*
Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// function greeting(name){
// return `Hello, ${name} how are you doing today?`

// }

// console.log(greeting("andrew"))

/*
**Basic Mathematical Operations**
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2){
  //Code
  let result = 0 

  if(operation === "+"){
    result = value1 + value2
  }
  
  if(operation === "-") {
    result = value1 - value2
  }

  if(opertation === "*"){
    result = value1 * value2
  }

  if(opertaion === "/"){
    result = value1 / value2
  }

  return result
  
  
}

console.log(basicOp("+", 3,4))