const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
if (a - b > 0) {
  console.log(">");
} else if (a - b == 0) {
  console.log("==");
} else if (a - b < 0) {
  console.log("<");
}
