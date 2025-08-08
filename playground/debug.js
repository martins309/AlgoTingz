//might use this to test the speed of algos


const debugLogs = [];

function logDebug({ name, calls, timeMs, notes = "" }) {
  debugLogs.push({
    Name: name,
    Calls: calls,
    Time: timeMs.toFixed(3) + " ms",
    Notes: notes,
    Timestamp: new Date().toLocaleTimeString()
  });

  console.clear(); // Optional: clear console so the table is fresh every time
  console.table(debugLogs);
}


//fib test 

let plainCalls = 0

let memoCalls = 0

function fib(num){
    plainCalls++
    if(num <= 1) return 1 
    return fib(num - 1) + fib(num - 2 )
}

console.time("plainCalls")
const plain  = fib(30)
console.timeEnd("plainCalls")


logDebug({
    name: "plain calls",
    calls: plainCalls,
    timeMs: performance.now(),
    notes: "plain calls"
})

function fibonacci(n, memo = {}){
    memoCalls++

    if(n in memo) return memo[n]
    if(n <= 1) return n
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]
}


console.time("memoCalls")
const result = fibonacci(30)
console.timeEnd("memoCalls")




logDebug({
    name: "fibonacci(30)",
    calls: memoCalls,
    timeMs: performance.now(),
    notes: "recursion notes"
})