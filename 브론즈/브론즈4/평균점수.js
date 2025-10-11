const fs = require("fs");
const lines = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sum = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] < 40) {
    lines[i] = 40;
  }
  sum += lines[i];
}
const average = Math.floor(sum / lines.length);
console.log(average);
