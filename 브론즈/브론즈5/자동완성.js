const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().trim();
if (a == "n" || a == "N") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
