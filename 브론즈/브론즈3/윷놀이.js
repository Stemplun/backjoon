const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const [a, b, c, d] = lines[i].split(" ").map(Number);
  switch (a + b + c + d) {
    case 0:
      console.log("D");
      break;
    case 1:
      console.log("C");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("A");
      break;
    case 4:
      console.log("E");
      break;
  }
}
