const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(lines[0]);

let Quater = [];
let Dime = [];
let Nickel = [];
let Penny = [];

for (let i = 0; i < T; i++) {
  const C = Number(lines[i + 1]);
  Quater[i] = Math.floor(C / 25);
  Dime[i] = Math.floor((C % 25) / 10);
  Nickel[i] = Math.floor(((C % 25) % 10) / 5);
  Penny[i] = Math.floor(((C % 25) % 10) % 5);
  console.log(`${Quater[i]} ${Dime[i]} ${Nickel[i]} ${Penny[i]}`);
}
