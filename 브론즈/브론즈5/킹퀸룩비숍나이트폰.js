const fs = require("fs");
const result = fs.readFileSync("/dev/stdin").toString().trim();
const N = result.split(" ").map(Number);
const arr = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - N[i];
}
console.log(arr.join(" "));
