const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
  const [r, e, c] = lines[i].split(" ").map(Number);
  if (e - c > r) console.log("advertise");
  else if (e - c === r) console.log("does not matter");
  else console.log("do not advertise");
}
