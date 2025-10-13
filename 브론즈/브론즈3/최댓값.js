const fs = require("fs");
const a = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let max = 0;
let idx = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
    idx = i + 1;
  }
}
console.log(max);
console.log(idx);
