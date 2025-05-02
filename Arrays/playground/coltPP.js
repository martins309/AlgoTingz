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

function constructNote(str1, str2) {
    let message = {}
    let letters = {}

    for(s of str1){
        message[s] = (message[s] || 0) + 1

    }

    for(s of str2) {
        letters[s] = (letters[s] || 0) + 1
    }

    for(key in message){
        if(!letters[key] || letters[key] < message[key]) {
            return false
        }
        if(message[key] === 0){
            return true
        }

    }
  return true 
}

console.log(constructNote("","chickenisfum"))





///// using a single object 

function constructNote2(message, letters) {
    //if the message is empty its fine as long as there are letters
    if(message.length === 0) return true 
    //if there are no letters than you cant construct the message
    if(letters.length === 0 ) return false 

    //create the hash map
    let lettersMap = {}

    //loop through the letters and add it to the hash map
    for(char of letters) {
        lettersMap[char] = (lettersMap[char] || 0 ) + 1
    }

    // loop through the message and see if the letters exist in the message
    for(char in message) {
        //if they dont exist, then return false. because you cant make the message
        //
        if(!lettersMap[char]) {
            return false
        }
        lettersMap[char] --
    }
   
    return true 
}

console.log(constructNote2("thisisfun", "thisisfun"))