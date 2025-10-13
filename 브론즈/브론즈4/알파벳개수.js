const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim().split("");
let a = [26];

for (let i = 0; i < 26; i++) {
  a[i] = 0;
}
for (let i = 0; i < S.length; i++) {
  a[S[i].charCodeAt(0) - 97]++;
}
console.log(a.join(" "));
