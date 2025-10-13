const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

const result = Math.ceil(a / 5);
console.log(result);
