//new method for debugging

// const people = [
//   { name: "Alice", age: 25, city: "NY" },
//   { name: "Bob", age: 30, city: "LA" },
//   { name: "Charlie", age: 35, city: "Chicago" }
// ];

// console.table(people);


// const car = {
//   make: "Tesla",
//   model: "Model 3",
//   year: 2023
// };

// console.table(car);


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.table(matrix);


//to get specific properties list the keys in an array

// const people = [
//   { name: "Alice", age: 25, city: "NY" },
//   { name: "Bob", age: 30, city: "LA" },
//   { name: "Charlie", age: 35, city: "Chicago" }
// ];

// console.table(people, ["city", "name"]);




//nested objects
const users = [
  { id: 1, info: { name: "Alice", age: 25 } },
  { id: 2, info: { name: "Bob", age: 30 } }
];

// Flatten the nested object before logging
const flatUsers = users.map(u => ({ id: u.id, name: u.info.name, age: u.info.age }));

console.table(flatUsers);


