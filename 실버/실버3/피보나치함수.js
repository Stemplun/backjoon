const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(line[0]);

function solution(number) {
  const dp = Array.from({ length: 41 }, () => [0, 0]);
  dp[0] = [1, 0];
  dp[1] = [0, 1];
  for (let i = 2; i <= 40; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }
  return dp[number];
}

for (let i = 1; i <= n; i++) {
  const k = Number(line[i]);
  const [a, b] = solution(k);
  console.log(`${a} ${b}`);
}
