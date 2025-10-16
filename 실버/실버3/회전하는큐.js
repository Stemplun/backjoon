const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const a = Array.from({ length: n }, (_, i) => i + 1);
const b = input[1].split(" ").map(Number);
let count = 0;

function shiftnum(a) {
  a.shift();
  return a;
}
function leftnum(a) {
  const num = a.shift();
  a.push(num);
  return a;
}

function rightnum(a) {
  const num = a.pop();
  a.unshift(num);
  return a;
}

for (let i = 0; i < m; i++) {
  while (a[0] !== b[i]) {
    if (a.indexOf(b[i]) <= parseInt(a.length / 2)) {
      leftnum(a);
    } else {
      rightnum(a);
    }
    count++;
  }
  shiftnum(a);
}

console.log(count);
