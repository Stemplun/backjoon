const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line === "#") break;
  let vowelCount = 0;
  for (let j = 0; j < line.length; j++) {
    const ch = line[j].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowelCount += 1;
    }
  }
  count.push(vowelCount);
}

for (let i = 0; i < count.length; i++) {
  console.log(count[i]);
}
