const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const currentTime = lines[0].split(" ").map(Number);
const cookingTime = Number(lines[1]);

let resultmin = 0;
let resulthour = 0;

resultmin = currentTime[1] + cookingTime;
if (resultmin >= 60) {
  resulthour = currentTime[0] + Math.floor(resultmin / 60);
  if (resulthour >= 24) {
    resulthour = resulthour % 24;
  }
  resultmin = resultmin % 60;
} else {
  resulthour = currentTime[0];
}
console.log(`${resulthour} ${resultmin}`);
