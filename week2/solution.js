//Given a set of Roman Numerals, return to the sum of each character as an integer. 
//ex: s = IV: I = 1, V = 5 
// s = 4




var romanToInt = function(s) {
    
    let romanNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    } 
    
   let total = 0;
     for (let i = 0; i < s.length; i++) {
         let currentInt = romanNum[s.charAt(i)];
         let nextInt = romanNum[s.charAt(i + 1)];
         
         
          if(nextInt){
             if(currentInt >= nextInt){
                 total += currentInt;
             } else {
                 total += (nextInt - currentInt);
                 i++;
             }
         } else {
             total += currentInt;
         }
        
     }
     
     return total;
 
 }
    
 