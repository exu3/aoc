const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf-8").split(" | ");

let segments = [];
for (let j = 0; j < input.length; j++) {
  segments[j] = input[j].split("\n");
}
console.log(segments);

let counter = 0;

const p = 0;
for (let m = 0; m < input.length; m++) {
  //   for (let p = 0; p < segments[m].length; p+=2) {
  if (segments[m][p].length == 2) {
    counter++;
  } else if (segments[m][p].length == 3) {
    counter++;
  } else if (segments[m][p].length == 4) {
    counter++;
  } else if (segments[m][p].length == 7) {
    counter++;
  } else {
    // nothing
  }
  //   }
}

console.log(counter);
