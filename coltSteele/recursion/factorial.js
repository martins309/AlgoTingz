/*
Write a function factorial which accepts a number and 
returns the factorial of that number. '
A factorial is the product of an integer and 
all the integers below it; e.g., factorial four ( 4! ) is equal to 24, 
because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


*/


//okay so this needs to be worked on.
// we have the right idea but it needs more

function factorial(num){
    
    if(num < 0 ) return 

   if(num === 0 || num === 1) return 1 

   return  num * factorial(num - 1) 

}

console.log(factorial(4))