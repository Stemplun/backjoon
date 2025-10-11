const fs = require("fs");
const [a, b, c, d, e] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const result = (a * a + b * b + c * c + d * d + e * e) % 10n;
console.log(result.toString());
