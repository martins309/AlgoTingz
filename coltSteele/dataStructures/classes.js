//here is how we deal with classes 

// JS is not object oriented by default
// but with the class key word it can be 

// this is a review though I use them often 



class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []
    }
    //you can create static methods that work on the instance of the class 
    fullName() {
        return `this is your full name:  ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1
        if(this.tardies >= 3){
            return 'Your are expelled'
        }
        
        return `${this.firstName} has been late ${this.tardies} times `
    }
    addScores(score){
        this.scores.push(score)
        return this.scores
    }

    average(){
        let sum = this.scores.reduce((a, b) => a + b)
        return sum / this.scores.length
    }

    static enrollStudent(){
        return "I have enrolled a student"
    }
   
}


//when you want to instantiate an object you use the new keyword like so

//when using a class method you cannot call it on an individual instance 
// it is solely used as a utility of that class 
// like when we are creating methods for models 

let firstStudent = new Student('chicken', 'little', 9)
let secondStudent = new Student('your mom', 'is a hoe', 69)

secondStudent.addScores(94)
secondStudent.addScores(99)
secondStudent.addScores(55)

console.log(Student.enrollStudent())