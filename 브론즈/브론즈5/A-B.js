const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/sdtin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(a - b);
