const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const time = lines[0].trim().split(" ").map(Number);
const cookingTime = Number(lines[1].trim());

let h = time[0];
let m = time[1];
let s = time[2] + cookingTime;

m += Math.floor(s / 60);
s = s % 60;

h += Math.floor(m / 60);
m = m % 60;

h = h % 24;

console.log(`${h} ${m} ${s}`);
