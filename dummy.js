const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 0;
const T = Number(input[idx++]);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number); // M=가로, N=세로
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    field[y][x] = 1; // 주의! y가 행, x가 열
  }

  const dfs = (y, x) => {
    visited[y][x] = true;
    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (field[ny][nx] === 1 && !visited[ny][nx]) dfs(ny, nx);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
