const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
console.log((a * b).toString()); // Output the sum of a and b as a string
