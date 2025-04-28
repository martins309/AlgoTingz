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

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30


*/

function kokiburi(s) {
    return Math.floor(s*1000/360*100)

}

console.log(kokiburi(1.08))