const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= a; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
