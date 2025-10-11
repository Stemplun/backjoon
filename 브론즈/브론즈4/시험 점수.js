const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const minguk = lines[0].trim().split(" ").map(Number);
const manse = lines[1].trim().split(" ").map(Number);

let minguksum = 0;
let mansesum = 0;
for (let i = 0; i < minguk.length; i++) {
  minguksum += minguk[i];
}
for (let i = 0; i < manse.length; i++) {
  mansesum += manse[i];
}
if (minguksum > mansesum) {
  console.log(minguksum);
} else if (minguksum < mansesum) {
  console.log(mansesum);
} else {
  console.log(minguksum);
}
