const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = Number(lines[0].trim());
const b = lines[1].split(" ").map(Number);
let count = 0;

for (let i = 0; i < b.length; i++) {
  if (a === b[i]) {
    count++;
  }
}
console.log(count);
