const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number); //n:세로(행)=> y, m:가로(열)=> x
let xcount = Array(m - 1).fill(0);
let ycount = Array(n - 1).fill(0);
let count = 0;

const chessboard = Array.from({ length: n }, () => Array(m).fill(0));
for (let i = 0; i < n; i++) {
  chessboard[i] = input[i + 1].split(" ").map(Number);
}
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    chessboard[i][j] !== chessboard[i][j + 1] ? xcount[i]++ : null;
    chessboard[i][j] !== chessboard[i + 1][j] ? ycount[j]++ : null;
  }
}

console.log(count);
===============
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.trim().split(""));

const patterns = ["B", "W"];
let minPaint = Infinity;

for (let startY = 0; startY <= N - 8; startY++) {
  for (let startX = 0; startX <= M - 8; startX++) {
    for (const firstColor of patterns) {
      let repaint = 0;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          // (i + j) 짝수면 시작색과 같고, 홀수면 반대색이어야 함
          const expected =
            (i + j) % 2 === 0 ? firstColor : firstColor === "B" ? "W" : "B";
          if (board[startY + i][startX + j] !== expected) repaint++;
        }
      }

      minPaint = Math.min(minPaint, repaint);
    }
  }
}

console.log(minPaint);
