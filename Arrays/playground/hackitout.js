//this is where we will go when we need to work something out
//this will help us understand our own syntax better cuz you suck lol

// okay so this is the first time  using this to hack it out




//here we will use this for the length of last word algo

var lengthOfLast = function(s) {
  
    s = s.trim()

    let words = s.split(" ")

    return words[words.length - 1].length 
 
}

console.log(lengthOfLast("hello world"))
