const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 0; i < a; i++) {
  console.log(`Hello World, Judge ${i + 1}!`);
}
