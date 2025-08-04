const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";
for (let i = a; i > 0; i--) {
  result += `${i}\n`;
}

console.log(result);
