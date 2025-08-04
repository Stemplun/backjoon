const fs = require("fs");
const a = fs.readFileSync(0, "utf8").trim(); // stdin 대신 0 사용
console.log(a.length);
