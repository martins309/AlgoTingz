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





// function quarterOf(month) {
//     let q1 = [1,2,3]
//     let q2 = [4,5,6]
//     let q3 = [7,8,9]
//     let q4 = [10,11,12]

//     if (month === q1[0] || month === q1[1] || month === q1[2]){
//         return 1

//     }

//     if(month === q2[0]|| month === q2[1] || month === q2[2]) {
//         return 2
//     } 

//     if(month === q3[0] || month === q3[1] || month === q3[2]){
//        return 3
//     }

//     if(month === q4[0] || month === q4[1] || month === q4[2]) {
//         return 4
//     }



// }





// console.log(quarterOf(10))

//////////// answer \\\\\\\\\
// function quarterOf(month) {
//     return Math.ceil(month / 3 )
// }

// console.log(quarterOf(4))



/*
A square of squares
You like building blocks. You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. 
Instead, you end up with an ordinary rectangle! Those blasted things! 
If you just had a way to know, whether you're currently working in vain… 
Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/


// function isSquare(n){
//     //or n >= 0 && Number.isInteger(Math.sqrt(n))
//     return Math.sqrt(n) % 1 === 0 

// }

// console.log(isSquare(10))

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// function getCount(str){
    
//   let vowels = {}
//   let isVowels = {
//     a: "a",
//     e: "e",
//     i: "i",
//     o: "o",
//     u: "u"
//   }

//   let count = 0 
  
//   for(s of str){
//     vowels[s] = (vowels[s] || 0) + 1
    
//   }

//   for(key in vowels) {
//     if(isVowels[key])
//         count+= vowels[key]
//   }
//   return count 
// }

// console.log(getCount("chicken"))


// function getCount(str) {
//     let isVowels = ['a', 'e','i', 'o', 'u']
//     let count = 0
    
//     for(let i = 0; i < str.length; i++){
//       if(isVowels.includes(str[i])) {
//         count += 1
//       }
//     }
//     return count
//   }

//   function getCount(str) {
//     return str.split('').filter(char => 'aeiou'.includes(char)).length;
//   }


/*
Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// function abbrevName(name){
//   let initial = ""

//     //find the space
//     let space = name.indexOf(" ")


   
//         // if there is a space and its not the last character 
//         if(space !== -1 && space < name.length -1){
//             space = name[space + 1].toUpperCase()
//             initial = name[0]
//         }

    
//     return initial.toUpperCase() + "." + space

// }

//join ting 
// function smash(words) {
//     return words.join(" ")
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']))


/*
In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and 
moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population 
greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/

// function nbYear(p0, percent, aug, p) {
//     if(p0 <= 0 || p <= 0)return null

//     let years = 0

//     while(p0 < p){
//         p0 = p0 + p0 * (percent / 100) + aug
//         p0 = Math.floor(p0)
//         years++
//     }

//     return years
    
    
    
    
// }

// console.log(nbYear(1500, 5, 100, 5000))


// // here is the one liner that I probs would or would not use
// const nbYear = (p0, percent, aug, p) => { let years = 0; while (p0 < p) p0 += p0 * (percent / 100) + aug, years++; return years; };



/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/



// function solution(str, ending){
//     if(str === "") return null

//     return str.endsWith(ending) 
// }

// console.log(solution("abc", "d"))





// function solutions(str, ending){
//     if(str === "") return null 

//     return str.slice(-ending.length) === ending
//   }

//   console.log(solutions("abc", "bc"))


/*
name of the problem = Function 1 - hello world

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. 
But how clever can you be to create the most creative "hello world" you can think of? 
What is a "hello world" solution you would want to show your friends?
*/







/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


*/


///// shit but it works lol

// function sumTwoSmallestNumbers(numbers) {  
//   // Code here
//   if(numbers.length === 0) return null

//   let sum = 0 
  
//   let sorted = numbers.sort((a,b) => a - b)

//   for(let i = 0; i < sorted.length; i++){
//     return sum = (sorted[sum] + sorted[sum + 1])
    
//   }
//   return sum
  
// }

// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))



// function sumTwoSmallestNumbers(numbers) {  
//   // Code here
//   if(numbers.length < 4) return null

//   const sorted = numbers.sort((a,b) => a - b)
//   return sorted[0] + sorted[1]

// }

// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))



/*
Description:
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. 
Elements of each pair represent the number of people that get on the bus (the first item) 
and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after 
the last bus stop (after the last array). Even though it is the last bus stop, 
the bus might not be empty and some people might still be inside the bus, 
they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people 
in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

// var number = function(busStops){
//   // Good Luck!
//   if(busStops.length % 2 !== 0) return null
//   if(busStops.length === 0) return 0

//   let total = 0 

//   for(let i = 0; i < busStops.length; i+= 2){
//     total += busStops[i] 
//     total -= busStops[i + 1]

//   }
//   return total
  


// }

// console.log(number([10,0,3,5,5,8]))

//

// var number = function(busStops){
//   let total = 0;

//   for (let i = 0; i < busStops.length; i++) {
//     total += busStops[i][0]; // people getting on
//     total -= busStops[i][1]; // people getting off
//   }

//   return total;
// }
// console.log(number([10,0,3,5,5,8]))




// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// */

// function isIsogram(str){
//   if(str.length === 0) return null

// }



/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members 
which category they will be placed.

To be a senior, a member must be at least 55 years old 
and have a handicap greater than 7. In this croquet club, handicaps range from 
-2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) 
stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

// function openOrSenior(data){
//     if(data.length === 0) return null
//     let category = []

//     for(let i = 0; i < data.length; i++){
//         let age = data[i][0]
//         let handicap = data[i][1]
        

//         age >= 55 && handicap > 7 ? category.push("Senior") :  category.push("Open")
        
//     }
//     return category
// }

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


// function getMiddle(str){

//    let len = str.length
//    let middle = Math.floor(len / 2)

//    if(str.length % 2 === 0){
//     return str.slice(middle -1, middle + 1)
//    }else {
//     return str[middle]
//    }
    

    
// }

// console.log(getMiddle("middle"))


// function noEx(str){
    
//     if(str.length === 0) return null

//     str.endsWith("!") ? str.slice(0, -1) : str

// }

// console.log(noEx("hi!"))

// function noEx(str){
//     return str.replace(/!/g, "")
// }


// function removeMiddleExclamation(str){
//     if(str.length === 0 ) return null

//     let middle = Math.floor(str.length / 2)

//     if(str.length % 2 !== 0){
//        str[middle].replace(/!/g, "")
//     }
//     return str
    
// }

// console.log(removeMiddleExclamation("!he!llo!"))



/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// function sumMix(x){
//     if(x.length ?? 0) 

    

//     return Array.from(x, Number).reduce((a,b) => a + b)
// }

// console.log(sumMix(["1", "2", "3", "4", "5"]))



/*
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons!
 each dragon takes 2 bullets to be defeated, 
 our hero has no idea how many bullets he should carry.. 
 Assuming he's gonna grab a specific given number of bullets and 
 move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)


*/

// this wont work cuz we need math lol i see it now we fix tomorrow
// name = Is he gonna survive?

// function hero(bullets, dragons){
// //Get Coding!
   
//     return bullets >= dragons *2
// }

// console.log(hero(1500, 751))


/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2 + 2^2 + 2^2 = 9

*/

// function squareSum(numbers){
    
//   return Array.from(numbers, (x) => x ** 2).reduce((a,b) => a + b)

//     // return numbers.map(x => x **2).reduce((a,b) => a + b)

//     // let sum = 0
//     //  numbers.forEach(x => sum += x ** 2)
//     //  return sum
// }

// console.log(squareSum([1,2,2]))


