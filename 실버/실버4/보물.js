const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

a.sort((x, y) => x - y);

const idx = b.map((val, i) => i).sort((i, j) => b[j] - b[i]);

const newA = Array(n);
for (let i = 0; i < n; i++) {
  newA[idx[i]] = a[i];
}

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += newA[i] * b[i];
}

console.log(sum);
