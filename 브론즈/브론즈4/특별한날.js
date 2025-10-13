const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const month = Number(lines[0].trim());
const day = Number(lines[1].trim());

if (month === 1) {
  console.log("Before");
} else if (month === 2) {
  if (day < 18) {
    console.log("Before");
  } else if (day === 18) {
    console.log("Special");
  } else {
    console.log("After");
  }
} else if (month > 2) {
  console.log("After");
}
