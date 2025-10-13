const fs = require("fs");
const result = Number(fs.readFileSync("/dev/stdin").toString().trim());
let sum = 0;
for (let i = 1; i <= result; i++) {
  sum += i;
}
console.log(sum);
