/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].


 */

//fun fact !! 
//you can iterate over strings as arrays when accessing each character

// var RomanToInteger = function(s) {
//     // s cannot = " " 
//     // because then there is no number
// const numerals = {    
//  I: 1,
//  V: 5,
//  X: 10,
//  L: 50,
//  C: 100,
//  D: 500,
//  M: 1000
// }
// let result = 0



//     for(let i = 0; i < s.length; i++){
//       let current = numerals[s[i]]
//       let next = numerals[s[i + 1]]

//       if(current < next) {
//         result += next - current
//         i++
//       }else {
//         result += current
//       }
//   }
//     return result
    
// }
// console.log(RomanToInteger("LVIII"))


//refactor this study different ways to solve this 

// so here is what i wanted to do but did not articulate it properly into code 

var RomanToInteger = function(s) {
  let res = 0
  let lowerString  = s.toLowerCase() 

  for(let i = 0; i < s.length; i++){
    switch(s[i].toLowerCase()){
      case "i":
        res += 1
        break
      case "v":
        res += 5
        break
      case "x":
        res += 10
        break
      case 'l':
        res += 50
        break
      case "c":
        res += 100
        break
      case "d":
        res += 500
        break
      case "m":
        res += 1000
        break
    }
  }
  if(lowerString.includes("iv") || lowerString.includes("ix")) {
    res -= 2
  }
  if(lowerString.includes("xc") || lowerString.includes("xl")) {
    res -= 20
  }
  if(lowerString.includes("cd") || lowerString.includes("cm")) {
    res -= 200
  }
  return res 
}
console.log(RomanToInteger("LVIII"))