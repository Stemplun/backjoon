const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
const result = a + b;
console.log(result.toString());
