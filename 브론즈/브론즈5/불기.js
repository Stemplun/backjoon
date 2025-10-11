const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().trim();
console.log(Number(a) - 543);
