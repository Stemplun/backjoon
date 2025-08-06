const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = lines[0].split(" ").map(Number);

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
}
console.log("비와이");
