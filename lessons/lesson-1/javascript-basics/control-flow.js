/**
 * - Control Flow

  - `if` Statements
  - `else` Statements
  - `else if` Statements
  - `switch` Statements
  - `for` Loops
  - `while` Loops
  - `do while` Loops
  - `break` and `continue` Statements
 */

// `if` Statements
if (true) {
  console.log("This is true");
}

// `else` Statements
if (false) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// `else if` Statements
if (false) {
  console.log("This is true");
} else if (true) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// `switch` Statements
const color = "red";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

// `for` Loops
for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}`);
}

// `while` Loops
let i = 0;
while (i < 10) {
  console.log(`Number ${i}`);
  i++;
}

// `do while` Loops
let j = 0;
do {
  console.log(`Number ${j}`);
  j++;
} while (j < 10);

// `break` and `continue` Statements
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }

  if (i === 5) {
    console.log("Stop the loop");
    break;
  }

  console.log(`Number ${i}`);
}
