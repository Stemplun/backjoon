const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let resulta = 0;
let resultb = 0;

resultb = b - 45;
if (resultb < 0) {
  resultb = 60 + resultb;
  if (a == 0) {
    resulta = 23;
  } else {
    resulta = a - 1;
  }
} else {
  resulta = a;
}
console.log(`${resulta} ${resultb}`);
