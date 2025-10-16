const fs = require("fs");
const lines = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = parseInt(lines[0]);
const a = lines[1].split(" ").map(Number);
let num = 1;
let count = 0;
const b = [];
let max = 0;

for (let i = 0; i < n; i++) {
  b.push(0);
}

for (let i = 0; i < n; i++) {
  if (a[i] > max) max = a[i];
}

for (let j = 0; j < max; j++) {
  for (let i = 0; i < n; i++) {
    if (a[i] == num) {
      b[i] = count++;
    }
  }
  num++;
}

console.log(b.join(" "));
