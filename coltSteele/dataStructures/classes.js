//here is how we deal with classes 

// JS is not object oriented by default
// but with the class key word it can be 

// this is a review though I use them often 



class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
}


//when you want to instantiate an object you use the new keyword like so

let firstStudent = new Student('chicken', 'little', 9)

console.log(firstStudent)