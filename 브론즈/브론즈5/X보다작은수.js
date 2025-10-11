const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, x] = lines[0].split(" ").map(Number);
const arr = lines[1].split(" ").map(Number);
const result = [];

for (let i = 0; i < n; i++) {
  if (arr[i] < x) {
    result.push(arr[i]);
  }
}

console.log(result.join(" "));
