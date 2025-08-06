const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = [];
for (let line of lines) {
  const [a, b] = line.split(" ").map(Number);
  result.push(a + b);
}
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
