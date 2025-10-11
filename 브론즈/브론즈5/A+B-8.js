const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(lines[0]);
let result = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  result.push(a + b);
}
for (let i = 1; i <= result.length; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  console.log("Case #" + i + ": " + `${a} + ${b} = ` + result[i - 1]); // Output format with case number
}
