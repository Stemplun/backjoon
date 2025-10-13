const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(lines[0]);

for (let i = 0; i < T; i++) {
  const c = lines[i + 1].split(" ").map(Number);
  let count = 0;
  let min = 100;
  for (let j = 0; j < c.length; j++) {
    if (c[j] % 2 === 0) {
      count += c[j];
      if (c[j] < min) {
        min = c[j];
      }
    }
  }
  console.log(`${count} ${min}`);
}
