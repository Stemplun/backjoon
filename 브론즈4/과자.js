const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const price = a * b;

if (price > c) {
  console.log(price - c);
} else {
  console.log(0);
}
