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

const generate = function(numRows) {
    while(numRows > 0) {
        pascal = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

        switch(pascal) {
            case numRows == 1:
                console.log(pascal[0])
            case numRows == 2:
                console.log(pascal[0][1])
            case numRows == 3:
                console.log(pascal[0][1][2])
            case numRows == 4:
                console.log(pascal[0][1][2])
            case numRows == 5:
                console.log([0][1][2][3][4])
            default:
                console.log("not in list")
        }
    }

}
