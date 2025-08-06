/*
Write a recursive function called fib 
which accepts a number and returns the nth number 
in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 
1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, 
and where every number thereafter is equal to 
the sum of the previous two numbers.

sequence: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 
514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 
24157817 39088169 63245986

*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){

    if(num === 0 || num === 1 ) return 1 

    fib()

    
}

console.log(fib(4))