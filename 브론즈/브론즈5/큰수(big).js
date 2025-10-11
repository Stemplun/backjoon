const fs = require("fs");
const a = BigInt(fs.readFileSync(0).toString().trim());
const result = a % 20000303n;
console.log(result.toString());
