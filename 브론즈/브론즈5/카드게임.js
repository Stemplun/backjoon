const fs = require("fs");
const [a, b, c, d, e] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(a + b + c + d + e);
