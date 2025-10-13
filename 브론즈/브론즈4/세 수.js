const fs = require("fs");
const a = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a[1]);
