/**
 * - Objects

  - Creating Objects
  - Accessing Properties
  - Modifying Properties
  - Adding Properties
  - Removing Properties
  - Iterating Over Objects
  - Object Methods ( `Object.keys`, `Object.values`, `Object.entries`, `Object.assign`, `Object.freeze`, `Object.seal`, `Object.isFrozen`, `Object.isSealed` )
 */

// Creating Objects
const person = {
  name: "John",
  age: 30,
};

// Accessing Properties
console.log(person.name); // John

// Modifying Properties
person.name = "Sara";

// Adding Properties
person.email = "sara@gmail.com";

// Removing Properties
delete person.age;

// Iterating Over Objects
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object Methods
const people = {
  person1: {
    name: "John",
    age: 30,
  },
  person2: {
    name: "Sara",
    age: 25,
  },
};

const peopleKeys = Object.keys(people);
const peopleValues = Object.values(people);
const peopleEntries = Object.entries(people);

console.log(peopleKeys);
console.log(peopleValues);
console.log(peopleEntries);

const person3 = {
  name: "Karen",
  age: 40,
};

const person4 = {
  name: "Bob",
  age: 35,
};

const people2 = Object.assign({}, person3, person4);

console.log(people2);

const person5 = {
  name: "John",
  age: 30,
};
// Object.freeze() makes the object immutable
Object.freeze(person5);

person5.age = 35;

console.log(person5);

const person6 = {
  name: "John",
  age: 30,
};

// Object.seal() makes the object non-extensible and prevents new properties from being added to it
Object.seal(person6);

person6.age = 35;

console.log(person6);
