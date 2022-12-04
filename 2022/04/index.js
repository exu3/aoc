// in how many does one range fully contain the other
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let rangeContainsCount = 0;

for (let i = 0; i < input.length; i++) {
  const [range1, range2] = input[i].split(",").map((range) => {
    const [start, end] = range.split("-");
    return { start: parseInt(start), end: parseInt(end) };
  });
  if (range1.start >= range2.start && range1.end <= range2.end) {
    rangeContainsCount++;
  } else if (range2.start >= range1.start && range2.end <= range1.end) {
    rangeContainsCount++;
  } else {
    // console.log("nope");
  }
}

console.log(rangeContainsCount);

// in how many do the ranges overlap
let rangeOverlapCount = 0;

for (let j = 0; j < input.length; j++) {
  const [range1, range2] = input[j].split(",").map((range) => {
    const [start, end] = range.split("-");
    return { start: parseInt(start), end: parseInt(end) };
  });
  if (range1.start <= range2.start && range1.end >= range2.start) {
    rangeOverlapCount++;
  } else if (range2.start <= range1.start && range2.end >= range1.start) {
    rangeOverlapCount++;
  } else {
    // console.log("nope");
  }
}

console.log(rangeOverlapCount);
