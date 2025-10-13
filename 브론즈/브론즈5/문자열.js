const fs = require("fs");

const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = Number(lines[0]);
const arg = lines.slice(1);

for (let i = 0; i < a; i++) {
  const s = arg[i];
  console.log(s[0] + s[s.length - 1]);
}
