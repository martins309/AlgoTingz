/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 */

/**
 * Constraints:

-231 <= x <= 231 - 1

 */

// const isPalindrome = function(x){
//     if(x < 0) {
//         return false
//     }

//        return x === reversedInteger(x);
//    };

//    const reversedInteger = function(x) {
//        let reversed = 0;

//        while (x > 0) {
//            reversed = (reversed * 10 ) + (x % 10);
//            x = Math.floor(x / 10);
//        }

//        return reversed;

// }

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let origin = x;
  let reversed = 0;

  while (origin > 0) {
    const lastDigit = origin % 10;
    //taking the last digit and adding it to the ones column
    reversed = reversed * 10 + lastDigit;
    origin = Math.trunc(origin / 10);
  }
  return x === reversed;
};

//gimme ya best shot ...
