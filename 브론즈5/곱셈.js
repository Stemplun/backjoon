const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const b1 = b % 10;
const b2 = Math.floor((b % 100) / 10);
const b3 = Math.floor(b / 100);

console.log(a * b1);
console.log(a * b2);
console.log(a * b3);
console.log(a * b);
