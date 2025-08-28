const fs = require("fs");
const a = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let count = 0;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] < a[i + 1]) count++;
  else if (a[i] > a[i + 1]) count--;
}
if (count === 7) console.log("ascending");
else if (count === -7) console.log("descending");
else console.log("mixed");
