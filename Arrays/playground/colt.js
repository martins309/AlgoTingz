/*
Implement a function called countUniqueValues which accepts a sorted array
and counts the unique values in the array. 
There can be negative numbers in the array 
but it will always be sorted
*/

function countUniqueValues(array) {
    let i = 0

    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++
            array[i] = array[j]
    }
    
    }
    return i + 1
}
console.log(countUniqueValues([1,1,1,1,1,1,2]))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([-2,-1,-1,0,1]))



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