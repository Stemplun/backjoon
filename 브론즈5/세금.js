const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

const b = a - (a / 100) * 22;
const c = a - (((a / 100) * 20) / 100) * 22;
console.log(b + " " + c);
