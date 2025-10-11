const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(lines[0]);
let result = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  result.push(a + b);
}
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
