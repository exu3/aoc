const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf-8").split("|\n");

let segments = [];
for (let j = 0; j < input.length; j++) {
  segments[j] = input[j].split(/\s/);
}
console.log(segments);

let counter = 0;

for (let i = 0; i < segments.length; i++) {
  for (let k = 0; k < segments[i].length; k++) {
    if (segments[i][k].length == 2) {
      console.log(segments[i][k]);
      const regex = /cf|fc/;
      const found = segments[i][k].search(regex);
      if (found > -1) {
        counter++;
      }
    } else if (segments[i][k].length == 4) {
      console.log(segments[i][k]);
      const regex = /[bcdf]/;
      const found = segments[i][k].search(regex);
      if (found > -1) {
        counter++;
      }
    } else if (segments[i][k].length == 3) {
      console.log(segments[i][k]);
      const regex = /[acf]/;
      const found = segments[i][k].search(regex);
      if (found > -1) {
        counter++;
      }
    } else if (segments[i][k].length == 7) {
      console.log(segments[i][k]);
      counter++;
    } else {
      // nothing
    }
  }
}

console.log(counter);
