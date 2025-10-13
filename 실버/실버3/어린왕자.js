const fs = require("fs");
const lines = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let idx = 0;
const testcase = Number(lines[idx++]);
let count = 0;

for (let t = 0; t < testcase; t++) {
  const [x1, y1, x2, y2] = lines[idx++].split(" ").map(Number);
  const n = Number(lines[idx++]);
  for (let i = idx; i < idx + n; i++) {
    const [x, y, r] = lines[i].split(" ").map(Number);
    if (
      r < Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2) &&
      r < Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2)
    ) {
      continue;
    } else if (
      r > Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2) &&
      r > Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2)
    ) {
      continue;
    } else {
      count++;
    }
  }
  console.log(count);
  idx += n;
  count = 0;
}
