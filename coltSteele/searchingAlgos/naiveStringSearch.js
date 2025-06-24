/*
define a function called  string search with parameters that 
have the long string and the pattern we are looking for
loop over a longer string 
if the characters don't match break out of the inner loop
if you complete the loop and find a match, increment a count
return the count

*/

//gpt solution
// function stringSearch(str, pat){
    
//     let count = 0
   
    

//     //loop over the first string
//     for(let i = 0; i < str.length; i++){
//         let match = true
//         for(let j = 0; j < pat.length; j++ ){
//             if(str[i + j] !== pat[j]){
//                 match = false
//                 break
//             }
//         }
//         if(match){
//             count++
//         }
//     }
    
//     return count 
// }   

// console.log(stringSearch("wowomgwowomg", "omg"))



//coltsteele solution

function strSearch(str, pat){
    let count = 0

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < pat.length; j++){
            if(pat[j] !== str[i + j]) break
            if(j === pat.length -1) count++
        }
    }
    return count
}

console.log(strSearch("wowomgwowomg", "omg"))
