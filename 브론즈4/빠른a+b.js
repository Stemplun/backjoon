const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(lines[0]);

const out = new Array(n); // 출력 버퍼

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  out[i - 1] = String(a + b);
}

process.stdout.write(out.join("\n"));
