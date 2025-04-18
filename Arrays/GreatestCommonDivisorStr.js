/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/


//my previous nonsense lol 
var gcdOfStrings = function(str1, str2) {
    // place the new strings into a variable
    let i = 0
    let common = ""
    // loops through strings
    while(i < str1 ) {
        if(i < str1 && str1 !== common){
            common += str1
            str1++
        }else {
            str2 === common
        }
    }
 return common
 

}

console.log(gcdOfStrings("ABCABC", "ABC"))


///////////////////////////////////////////////
//the correct answer 


var gcdOfStrings = function(str1, str2) {
    // so there is this thing called  the euclidean algorithm or something like that 
    // and i goes a little something like this
    
    //if the concatenation of strings does not match return an empty string
    if(str1 + str2 != str2 + str1) return ""
    
    //recursion function that will call until b === 0 
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    
    
    let len = gcd(str1.length, str2.length)
    
    return str1.substring(0, len)
     
    
    }
    
    console.log(gcdOfStrings("ABCABC", "ABC"))