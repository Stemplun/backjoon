const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = Number(lines[0]);
const c = Number(lines[2]);
const be = lines[1].split(" ").map(Number);

let count = 0;
for (let i = 0; i < a; i++) {
  if (be[i] === c) {
    count++;
  }
}

console.log(count);
