//this is where we will go when we need to work something out
//this will help us understand our own syntax better cuz you suck lol

// okay so this is the first time  using this to hack it out




//here we will use this for the length of last word algo

var lengthOfLast = function(s) {
    //might use a regular expression for this
    let regex = /^[a-zA-Z\s]*$/ 
    
    let newString = ""
    
    for(let i = 0; i < s.length; i++) {
        s[i] === " " ? i++ : newString[i] === s[i]
        return newString
        
    }
    
}

console.log(lengthOfLast("hello world"))
