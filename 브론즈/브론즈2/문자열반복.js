const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const [aStr, b] = lines[i].split(" ");
  const a = parseInt(aStr, 10);

  if (!b) continue; // 혹시 공백 라인 방지
  let result = [];
  for (let j = 0; j < b.length; j++) {
    for (let k = 0; k < a; k++) {
      result.push(b[j]);
    }
  }
  console.log(result.join(""));
}
