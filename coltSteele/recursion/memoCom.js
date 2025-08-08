let plainCalls = 0;
let memoCalls = 0;

function fibPlain(num) {
    plainCalls++;
    if (num <= 1) return num;
    return fibPlain(num - 1) + fibPlain(num - 2);
}

function fibMemo(num, memo = {}) {
    memoCalls++;
    if (num in memo) return memo[num];
    if (num <= 1) return num;
    memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
    return memo[num];
}

const results = [];

// Plain Fib
console.time("Plain Fib");
const plainResult = fibPlain(35);
const plainTime = console.timeEnd("Plain Fib"); // note: returns undefined, so we need to track manually
results.push({ Type: "Plain Recursion", Result: plainResult, Calls: plainCalls, Time: "See above" });

// Reset timer tracking for table
plainCalls = 0;

// Memoized Fib
console.time("Memoized Fib");
const memoResult = fibMemo(35);
const memoTime = console.timeEnd("Memoized Fib");
results.push({ Type: "Memoized Recursion", Result: memoResult, Calls: memoCalls, Time: "See above" });

// Show in table
console.table(results);
