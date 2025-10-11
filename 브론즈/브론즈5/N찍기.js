const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= a; i++) {
  console.log(i);
}
