const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().trim();
let result = [];
for (let i = 0; i < a.length; i++) {
  let code = a[i].charCodeAt(0);
  if (code - 65 < 3) {
    result[i] = String.fromCharCode(code + 23);
  } else {
    result[i] = String.fromCharCode(code - 3);
  }
}
console.log(result.join(""));
