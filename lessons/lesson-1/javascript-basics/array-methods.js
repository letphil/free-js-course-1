/**
 * - Arrays

  - Creating Arrays
  - Accessing Elements
  - Modifying Elements
  - Adding Elements
  - Removing Elements
  - Iterating Over Arrays
  - Array Methods ( `map`, `filter`, `reduce`, `forEach`, `find`, `findIndex`, `some`, `every`, `sort`, `reverse`, `concat`, `slice`, `splice`, `push`, `pop`, `shift`, `unshift` )
 */

// Creating Arrays
const numbers = [1, 2, 3, 4, 5];

// Accessing Elements
console.log(numbers[0]); // 1

// Modifying Elements
numbers[0] = 10;

// Adding Elements
numbers.push(6);

// Removing Elements
numbers.pop();

// Iterating Over Arrays
numbers.forEach(function (number) {
  console.log(number);
});

// Array Methods
