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

var gcdOfStrings = function(str1, str2) {
    // one variable to keep track of string 1 and string 2
    let i = 0 
    let j = 0
    let common = ""
    // loops through strings
    for(let str of str1){
        if (str1[str] > 0) {
            common += str
            str1++
        }
    }

    return common
    

}

console.log(gcdOfStrings("ABCABC", "ABC"))