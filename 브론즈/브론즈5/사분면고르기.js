const fs = require("fs");
const lines = fs.readFileSync(0).toString().trim().split("\n");
const a = Number(lines[0]);
const b = Number(lines[1]);
if (a > 0 && b > 0) {
  console.log("1");
} else if (a < 0 && b > 0) {
  console.log("2");
} else if (a < 0 && b < 0) {
  console.log("3");
} else if (a > 0 && b < 0) {
  console.log("4");
}
