const fs = require("fs");
const string = fs.readFileSync("/dev/stdin").toString().trim();
const ascii = string.charCodeAt(0);
console.log(ascii); // Output the ASCII value of the character
