/**
 * - Functions

  - Function Declarations ( `function add(a, b) { return a + b; }` )
  - Function Expressions ( `const add = function(a, b) { return a + b; }` )
  - Arrow Functions ( `=>` )
  - Higher Order Functions ( `map`, `filter`, `reduce` )
  - Callback Functions ( `setTimeout`, `setInterval`, `addEventListener` )
  - IIFE (Immediately Invoked Function Expressions)
 */

// Function Declarations
function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());

// Function Expressions
const square = function (x = 3) {
  return x * x;
};

console.log(square());

// Arrow Functions
const add = (a = 1, b = 1) => a + b;

console.log(add(5, 5));

// Higher Order Functions
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// Callback Functions
function myFunction(callback) {
  // do something
  callback();
}

myFunction(function () {
  console.log("Callback");
});

// IIFE (Immediately Invoked Function Expressions)
(function () {
  console.log("IIFE Ran..");
})();

(function (name) {
  console.log("Hello " + name);
})("Brad");
