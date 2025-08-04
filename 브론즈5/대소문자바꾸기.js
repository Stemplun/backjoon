const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().trim().split("");

for (let i = 0; i < 100; i++) {
  if (a[i] == null) break;

  if (a[i] === a[i].toLowerCase()) {
    a[i] = a[i].toUpperCase();
  } else if (a[i] === a[i].toUpperCase()) {
    a[i] = a[i].toLowerCase();
  }
}
console.log(a.join(""));
