/*
define a function called  string search with parameters that 
have the long string and the pattern we are looking for
loop over a longer string 
if the characters don't match break out of the inner loop
if you complete the loop and find a match, increment a count
return the count

*/


function stringSearch(str, pat){
    
    let count = 0

    //loop over the first string
    for(let i = 0; i < str.length; i++){
        if(str[i] !== pat[i]){
            return count
        }else {
            str[i] === pat
            count++
        }
    }
    return count
}

console.log(stringSearch("wowomgwowomg", "omg"))