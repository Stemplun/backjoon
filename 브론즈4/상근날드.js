const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let burger = 0;
let drink = 0;

for (let i = 0; i < 3; i++) {
  if (burger === 0 || burger > Number(lines[i].trim())) {
    burger = Number(lines[i].trim());
  }
}
for (let i = 3; i < 5; i++) {
  if (drink === 0 || drink > Number(lines[i].trim())) {
    drink = Number(lines[i].trim());
  }
}
console.log(burger + drink - 50);
