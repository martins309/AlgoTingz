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


let memoCalls = 0

function fibonacci(n, memo = {}){
    memoCalls++

    if(num in memo) return memo[num]
    if(num <= 1) return num
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
}


console.time("fib(30)")
const result = fibonacci(30)
console.timeEnd("fib(30)")


logDebug({
    name: "fibonacci(30)",
    calls: memoCalls,
    timeMs: performance.now(),
    notes: "recursion notes"
})