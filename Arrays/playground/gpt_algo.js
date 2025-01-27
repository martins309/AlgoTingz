/*
Write a function that takes an array of integers as input and returns the maximum value in the array. 
If the array is empty, return null.




*/


const maxValue = (array) => {
  return array !== 0 ? Math.max(array) : null
}

console.log([2,5,1,8,4])