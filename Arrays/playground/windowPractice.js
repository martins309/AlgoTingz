/*
🧪 Practice: Find Average of All Contiguous Subarrays of Size K
Prompt:
Given an array of integers and a number k, return an array of the averages of all contiguous subarrays of size k.

js
Copy
Edit
// Example:
findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5); 
// Expected Output: [2.2, 2.8, 2.4, 3.6, 2.8]


*/

function findAverages(arr, k){
    let average = []
    let currentWindow = 0
    let windowStart = 0

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        if(windowEnd >= k) {
            
        }
        
        
    }
    return currentWindow
}

console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))