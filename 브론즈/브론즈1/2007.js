const fs = require("fs");
const [x, y] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let count = 0;
for (let i = 1; i < x; i++) {
  if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10) {
    count += 31;
  } else if (i === 4 || i === 6 || i === 9 || i === 11) {
    count += 30;
  } else {
    count += 28;
  }
}
count += y;
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(day[count % 7]);
