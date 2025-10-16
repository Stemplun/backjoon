const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (field[i][j] === 1 && !visited[i][j]) {
      dfs(i, j); // 새로운 구역 발견
      count++; // 구역 개수 +1
    }
  }
}
///////////////////////////////////////////////////////////
//2차원 형태 기준
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
////////////////////////////////////////////////////////////
// 암기 기본 형태
function dfs(y, x) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      !visited[ny][nx] &&
      field[ny][nx] === 1
    ) {
      dfs(ny, nx);
    }
  }
}
////////////////////////////////////////////////////////////
