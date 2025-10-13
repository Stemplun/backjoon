const fs = require("fs");
const a = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let dump = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      dump = a[i];
      a[i] = a[j];
      a[j] = dump;
    }
  }
}
console.log(`${a[0]} ${a[1]} ${a[2]}`);
