const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

if (a.length >= b.length) {
  console.log("go");
} else if (a.length < b.length) {
  console.log("no");
}
