const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 0; i < a; i++) {
  let result = "";
  for (let j = 1; j <= a - i; j++) {
    result += "*";
  }
  console.log(result);
}
