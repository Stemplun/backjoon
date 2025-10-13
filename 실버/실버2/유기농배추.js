const fs = require("fs");
const lines = fs.readFileSync("dev/stdin").toString().split("\n");
let idx = 0;
const testcase = parseInt(lines[idx++]);

for (let t = 0; t < testcase; t++) {
  const [x, y, k] = lines[idx++].split(" ").map(Number);
  const dp = Array.from({ length: x }, Array(y).fill(0));
  let count = 0;
  for (let i = 0; i < k; i++) {
    const [a, b] = lines[idx++].split(" ").map(Number);
    dp[a][b] = 1;
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (dp[i][j] === 1 && dp[i + 1][j] === 0 && dp[i][j + 1] === 0) {
        count++;
      } else if ((dp[i][j] === 1 && i === x - 1) || j === y - 1) {
        count++;
      }
    }
  }
  console.log(count);
}
