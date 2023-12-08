/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */

/**
 * Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */

/**
 * Constraints:

1 <= numRows <= 30
 */


// this is wrong*****

// const generate = function(numRows) {
//     while(numRows > 0) {
//         pascal = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

//         switch(pascal) {
//             case numRows == 1:
//                 console.log(pascal[0])
//             case numRows == 2:
//                 console.log(pascal[0][1])
//             case numRows == 3:
//                 console.log(pascal[0][1][2])
//             case numRows == 4:
//                 console.log(pascal[0][1][2])
//             case numRows == 5:
//                 console.log([0][1][2][3][4])
//             default:
//                 console.log("not in list")
//         }
//     }

// }


//solution using recursion

const generate = function(numRows) {
    //if numrows == to 0 then return an empty array
    if(numRows === 0){
        return []
    }

    //if the numrows == 1, then return [1] which is the first part of the pascals triangle
    if(numRows === 1) {
        return [[1]]
    }

    //this portion of the code will generate the previous row
    let prevRows = generate(numRows - 1)
    //and this will create a new array with the inial value of one. The .fill() method is what will initalized the new array to one so that each time that a new array is generated that it starts with 1
    let newRow = new Array(numRows).fill(1)
}