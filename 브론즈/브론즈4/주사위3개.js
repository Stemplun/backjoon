const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 0;
if (a === b && b === c) {
  result = a * 1000 + 10000;
} else if (
  (a === b) & (a !== c) ||
  (b === c && a !== b) ||
  (a === c && a !== b)
) {
  const same = a === b ? a : c;
  result = same * 100 + 1000;
} else if (a !== b && b !== c && a !== c) {
  const max = Math.max(a, b, c);
  result = max * 100;
}
console.log(result);
