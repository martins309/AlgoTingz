// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring 
// with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)


function findLongestSubstring(str){
    let seen = {}
    let maxLen = 0
    let start = 0


    for(let end = 0; end < str.length; end ++){
        const ch = str[end]

        if(seen[ch] >= start){
            start = seen[ch] + 1
        }

        seen[ch] = end

        maxLen = Math.max(maxLen, end - start + 1)
    }

    return maxLen
}

console.log(findLongestSubstring('thisishowwedoit'))
