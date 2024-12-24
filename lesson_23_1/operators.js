// operators
// Арифметические: +, -, *, /, %.
// Логические: &&, ||, !.
// Сравнения: ==, ===, !=, <, >, <=.

// let a = 10;
// let b = 5;
// let c = 5;

// const a = 'Hello'
// const b = ', world'

// console.log(a + " asdasd " + b);

// console.log(b && c === a);
// console.log(b || c === a);

// const d = false;

// if(!d) {
//   console.log('true');
// }

// без приведения типов
const a = 0.923232;
const b = '1';

console.log(a == b); // true

// с приведением типов
const c = 1;
const d = "1";

console.log(Math.round(a.toFixed(2)) === b); // false
