const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());
if (a == 0) {
  console.log("YONSEI");
} else if (a == 1) {
  console.log("Leading the Way to the Future");
}
