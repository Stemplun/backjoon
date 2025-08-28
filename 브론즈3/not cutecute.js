process.stdin.setEncoding("utf8");

let token = "";
let n = null; // 첫 토큰: 전체 개수
let read = 0; // 읽은 응답 개수
let cute = 0; // 1의 개수

function eat(tok) {
  if (tok === "") return;
  if (n === null) {
    n = Number(tok);
    return;
  }
  // 이후 n개만 보면 됨
  if (tok === "1") cute++;
  read++;
  if (read === n) {
    // 필요한 만큼만 읽고 바로 출력 후 종료 → 메모리/시간 절약
    console.log(cute > n - cute ? "Junhee is cute!" : "Junhee is not cute!");
    process.exit(0);
  }
}

process.stdin.on("data", (chunk) => {
  for (let i = 0; i < chunk.length; i++) {
    const ch = chunk[i];
    // 공백류(스페이스/개행/탭 등)에서 토큰 확정
    if (
      ch === " " ||
      ch === "\n" ||
      ch === "\r" ||
      ch === "\t" ||
      ch === "\v" ||
      ch === "\f"
    ) {
      eat(token);
      token = "";
    } else {
      token += ch;
    }
  }
});

process.stdin.on("end", () => {
  // 입력이 공백 없이 끝나면 마지막 토큰 처리
  eat(token);
  if (read === n && n !== null) {
    console.log(cute > n - cute ? "Junhee is cute!" : "Junhee is not cute!");
  }
});
