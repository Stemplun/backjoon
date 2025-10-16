const [m, l] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const a = [];

for (let i = l; i <= 100; i++) {
  let sum = 0;
  const middle = Math.ceil(m / i);
  if (i % 2 === 0) {
    for (let j = -Math.floor(i / 2); j < Math.floor(i / 2); j++) {
      sum += middle + j;
    }
    if (sum === m) {
      for (let k = -Math.floor(i / 2); k < Math.floor(i / 2); k++) {
        a.push(middle + k);
      }
      break;
    }
    for (let j = -Math.floor(i / 2) + 1; j <= Math.floor(i / 2); j++) {
      sum += middle + j;
    }
    if (sum === m) {
      for (let k = -Math.floor(i / 2) + 1; k <= Math.floor(i / 2); k++) {
        a.push(middle + k);
      }
      break;
    }
  } else {
    for (let j = -Math.floor(i / 2); j <= Math.floor(i / 2); j++) {
      sum += middle + j;
    }
    if (sum === m) {
      for (let k = -Math.floor(i / 2); k <= Math.floor(i / 2); k++) {
        a.push(middle + k);
      }
      break;
    }
  }
}

console.log(a.join(" "));
================
const [N, L] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let found = false;

for (let len = L; len <= 100; len++) {
  const x = (N - (len * (len - 1)) / 2) / len; // 시작 수
  if (x % 1 === 0 && x >= 0) { // 정수이면서 0 이상이면 가능
    const result = Array.from({ length: len }, (_, i) => x + i);
    console.log(result.join(" "));
    found = true;
    break;
  }
}

if (!found) console.log(-1);
