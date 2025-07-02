/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


// function reverseString(str){
// //     const string = str.split(" ")

// //    const reversed =  string.map(w => {
// //         return w.split("").reverse().join("")
// //     })
// //     return reversed.join(" ")

//     return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }

// console.log(reverseString("I like eggs"))




/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

*/


function numToString(num){
    return num.toString()
}
console.log(numToString(123))

