/*

Write a recursive function called fib 
which accepts a number and returns the nth number 
in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 
1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, 
and where every number thereafter is equal to 
the sum of the previous two numbers.
                  4              10
sequence: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
                                                            28
2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 
                                                35
514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 
24157817 39088169 63245986

*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//okay so the issue is that they're giving a number that represents that value at that position
// so the 4th num is 3
//the 10th num is 55
// and so on
// how the fuck do i associate a position to a value? 
// an array
// but i can't just load the array with nums and then try to map it
// it has to be a fibonacci array that continues to grow each time the function is called
// and then when i console.log a num it returns the number that holds that position
//but how? 



function fib(num) {
    if (num <= 1) return num; // base cases: 0 → 0, 1 → 1
    return fib(num - 1) + fib(num - 2); // recursive step
}


//memoized version to account the calculation of larger numbers


function fibonacci(num, memo = {}){
    if(num in memo) return memo[num]
    if(num <= 1) return num

    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
}


console.time("Plain");
console.log(fib(40)); // First run with memo → still instant for large numbers
console.timeEnd("Plain");

console.time("Memoized");
console.log(fibonacci(50)); // Way faster than plain recursion
console.timeEnd("Memoized");
