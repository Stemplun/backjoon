const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= a; i++) {
  let star = "";
  for (let j = 1; j <= a - i; j++) {
    star += " ";
  }
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
