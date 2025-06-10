////////////////////Recursion\\\\\\\\\\\\\\\\\\

//without recursion
// function CountDown(num){
//   for(let i = num; i > 0; i--){
//   console.log(i)
    
//   }
//   console.log("All done")
//   return
// }

// console.log(CountDown(5))

// function countDown(num) {
//   if(num <= 0){
//     console.log("All done")
//     return
//   }
//   console.log(num)
//   num--
//   countDown(num)
// }


//Helper method recursion
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])


//pure recursion

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
                                                                
                                                                             
                            
        


//first recursive problem
/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - 
do not worry about negative bases and exponents.

*/
function power(base, exponent){
    if(exponent === 0) return 1

    let product = 0

    if(base && exponent === base){
        product = exponent * power
        
    }

    if(exponent > base){
        for(let i = 0; i < exponent; i++)
            product *= base
    }

    return product

}

console.log(power(2,4))

