const fs = require("fs");
const lines = fs.readFileSync("dev/stdin").toString().split("\n");
const n = parseInt(lines[0]);
const dp = Array.from({ length: 30 }, () => Array(30).fill(0));
for (let i = 0; i < 30; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) dp[i][j] = 1;
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}
for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  console.log(dp[b][a]);
}

// C(a, b) = C(a-1, b-1) + C(a-1, b)
