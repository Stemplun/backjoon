const fs = require("fs"); // node.js에서 파일시스템 접근을 위한 모듈
const line = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 표준 입력을 읽고, 문자열로 변환 후 줄바꿈 기준으로 나눔
const n = line[0]; // 첫 번째 줄은 테스트 케이스의 수

function solution(x1, y1, x2, y2, r1, r2) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // 두 원의 중심 사이의 거리
  if (x1 === x2 && y1 === y2 && r1 === r2) return -1; // 두 원이 같을 때
  if (distance > r1 + r2 || distance < Math.abs(r1 - r2)) return 0; // 두 원이 떨어져 있을 때 또는 한 원이 다른 원 안에 있을 때
  if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) return 1;
  return 2;
}

for (let i = 1; i <= n; i++) {
  const [x1, y1, r1, x2, y2, r2] = line[i].split(" ").map(Number);
  console.log(solution(x1, y1, x2, y2, r1, r2));
}

// 두 원의 교점을 구하는 문제
// 원의 중심 사이의 거리와 반지름의 합, 차를 비교하여 교점의 개수를 판별
// 1. 두 원이 같을 때: 무한대 (-1)
// 2. 두 원이 떨어져 있을 때: 0
// 3. 두 원이 외접할 때: 1
// 4. 두 원이 내접할 때: 1
// 5. 두 원이 두 점에서 만날 때: 2
// 6. 한 원이 다른 원 안에 있을 때: 0
// 7. 한 원이 다른 원 안에 내접할 때: 1
// 8. 두 원이 겹칠 때: 2
