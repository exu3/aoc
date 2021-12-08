const fs = require("fs");
const input = fs
  .readFileSync("example.txt", "utf8")
  .split("\n")
  .map((l) => l.split(" -> ").map((c) => c.split(",")));

const lineIndex = 0;
const cIndex = 0; // coordinate: 0 for (x1, y1) or 1 for (x2, y2)
const xy = 0; // 0 for x coordinate, 1 for y coordinate
let x1 = parseInt(input[lineIndex][cIndex][xy]);

const cx1 = parseInt(input[lineIndex][0][0]);
const cx2 = parseInt(input[lineIndex][1][0]);
const cy1 = parseInt(input[lineIndex][0][1]);
const cy2 = parseInt(input[lineIndex][1][1]);

if (cx1 == cx2) {
  console.log("difference of the y's");
} else if (cy1 == cy2) {
  console.log("difference of the x's");
} else {
  console.log("fak code no work");
}

const everything = input.join().split(",");

for (let w = 0; w <= everything.length; w++) {
  let everything = parseInt(everything[w]);
  const max = Math.max(everything);
  console.log(max);
}
console.log(input.join().split(","));
console.log(x1);
