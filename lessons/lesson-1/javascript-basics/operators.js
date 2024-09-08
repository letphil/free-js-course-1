/**
 * 
  - Arithmetic Operators

    - Increment and Decrement Operators ( `++`, `--` )
    - Addition Operator ( `+` )
    - Subtraction Operator ( `-` )
    - Multiplication Operator ( `*` )
    - Division Operator ( `/` )
    - Modulus Operator ( `%` )
    - Exponentiation Operator ( `**` )

  - Assignment Operators

    - Assignment Operator ( `=` )
    - Addition Assignment Operator ( `+=` )
    - Subtraction Assignment Operator ( `-=` )
    - Multiplication Assignment Operator ( `*=` )
    - Division Assignment Operator ( `/=` )
    - Modulus Assignment Operator ( `%=` )

  - Comparison Operators

    - Equal Operator ( `==` )
    - Not Equal Operator ( `!=` )
    - Strict Equal Operator ( `===` )
    - Strict Not Equal Operator ( `!==` )
    - Greater Than Operator ( `>` )
    - Greater Than or Equal Operator ( `>=` )
    - Less Than Operator ( `<` )
    - Less Than or Equal Operator ( `<=` )

  - Logical Operators

    - Logical AND Operator ( `&&` )
    - Logical OR Operator ( `||` )
    - Logical NOT Operator ( `!` )

  - Ternary Operator
    - Ternary Operator ( `? :` )
 */

// Increment and Decrement Operators ( `++`, `--` )
let x = 5;
x++;
console.log(x); // 6

let y = 5;
y--;
console.log(y); // 4

// Addition Operator ( `+` )
let a = 5;
let b = 10;
let sum = a + b;
console.log(sum); // 15

// Subtraction Operator ( `-` )
let c = 5;
let d = 10;
let difference = d - c;
console.log(difference); // 5

// Multiplication Operator ( `*` )
let e = 5;
let f = 10;
let product = e * f;
console.log(product); // 50

// Division Operator ( `/` )
let g = 5;
let h = 10;
let quotient = h / g;
console.log(quotient); // 2

// Modulus Operator ( `%` )
let i = 5;
let j = 10;
let remainder = j % i;
console.log(remainder); // 0

// Exponentiation Operator ( `**` )
let k = 5;
let l = 2;
let power = k ** l;
console.log(power); // 25

// Assignment Operator ( `=` )
let m = 5;
let n = m;
console.log(n); // 5

// Addition Assignment Operator ( `+=` )
let o = 5;
o += 5;
console.log(o); // 10

// Subtraction Assignment Operator ( `-=` )
let p = 5;
p -= 5;
console.log(p); // 0

// Multiplication Assignment Operator ( `*=` )
let q = 5;
q *= 5;
console.log(q); // 25

// Division Assignment Operator ( `/=` )
let r = 5;
r /= 5;
console.log(r); // 1

// Modulus Assignment Operator ( `%=` )
let s = 5;
s %= 5;
console.log(s); // 0

// Equal Operator ( `==` )
let t = 5;
let u = 5;
console.log(t == u); // true

// Not Equal Operator ( `!=` )
let v = 5;
let w = 10;
console.log(v != w); // true

// Strict Equal Operator ( `===` )
let x1 = 5;
let y1 = 5;
console.log(x === y); // true

// Strict Not Equal Operator ( `!==` )
let z = 5;
let aa = 10;
console.log(z !== aa); // true

// Greater Than Operator ( `>` )
let ab = 5;
let ac = 10;
console.log(ab > ac); // false

// Greater Than or Equal Operator ( `>=` )
let ad = 5;
let ae = 5;
console.log(ad >= ae); // true

// Less Than Operator ( `<` )
let af = 5;
let ag = 10;
console.log(af < ag); // true

// Less Than or Equal Operator ( `<=` )
let ah = 5;
let ai = 5;
console.log(ah <= ai); // true

// Logical AND Operator ( `&&` )
let aj = 5;
let ak = 10;
console.log(aj < ak && aj > ak); // false

// Logical OR Operator ( `||` )
let al = 5;
let am = 10;
console.log(al < am || al > am); // true

// Logical NOT Operator ( `!` )
let an = 5;
let ao = 10;
console.log(!(an < ao)); // false

// Ternary Operator ( `? :` )
let ap = 5;
let aq = 10;
let ar = ap > aq ? "yes" : "no";
console.log(ar); // no
