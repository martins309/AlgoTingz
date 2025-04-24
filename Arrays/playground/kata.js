/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbreviation(name){
    let initial =""

    for(let i = 0; i < name.length; i++){
        initial += name[0]
    }
    return initial.toUpperCase()

}

console.log(abbreviation("tom"))