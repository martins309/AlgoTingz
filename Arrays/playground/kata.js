/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbreviation(name){
    let initial = ""

    //find the space
    let space = name.indexOf(" ")


    for(let i = 0; i < name.length; i++){
        // if there is a space and its not the last character 
        if(space !== -1 && space < name.length -1){
            space = name[space + 1].toUpperCase()
            initial = name[0]
        }
            
    }
    
    return initial.toUpperCase() + "." + space
}

console.log(abbreviation("patrick swazey"))