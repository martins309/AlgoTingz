/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// function abbreviation(name){
//     let initial = ""

//     //find the space
//     let space = name.indexOf(" ")


//     for(let i = 0; i < name.length; i++){
//         // if there is a space and its not the last character 
//         if(space !== -1 && space < name.length -1){
//             space = name[space + 1].toUpperCase()
//             initial = name[0]
//         }
            
//     }
    
//     return initial.toUpperCase() + "." + space
// }

// console.log(abbreviation("patrick swazey"))

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30


*/

// function kokiburi(s) {
//     // return Math.floor(s*1000/3600*100)
//     return Math.floor(s * 27.77778)

// }

// console.log(kokiburi(1.08))

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, and return the largest and lowest number in that list, respectively. 
Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5


*/

// function min(array){
//     // return Math.min(...array)
//    return Math.min.apply(null, array)
// }


// function max(array){
//     // return Math.max(...array)
//     return Math.max.apply(null, array)
// }

// console.log(max([1,2,3,4]))
// console.log(min([3,4,5,67,7,-2,0]))


/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

// function stringToArray(string){
//     return string.split(" ")
// }

// console.log(stringToArray("i like chicken"))


/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/





function quarterOf(month) {
  
let quarters = [1,2,3,4,5,6,7,8,9,10,11,12]

for(let i = 0; i < quarters.length; i++){
    if(month == quarters[i] || quarters[i + 1] || quarters[i  + 2]){
        console.log("this is the first quarter")
    }
   
}

 
  return month 
}


console.log(quarterOf(1))
