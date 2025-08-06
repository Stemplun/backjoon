const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().trim();
console.log(`:fan::fan::fan:
:fan::${a}::fan:
:fan::fan::fan:`);
