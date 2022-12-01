const fs = require("fs");
const input = fs
  .readFileSync("example.txt", "utf-8")
  .split(",")
  .map((n) => parseInt(n));

console.log(input.length);

// const reducer = (prev, current) => prev + current;
const avg = Math.round(
  input.reduce((prev, current) => prev + current, 0) / input.length
);

let min = 0;
let fuel = 0;

for (let i = 0; i < input.length; i++) {
  const steps = Math.abs(avg - input[i]);

  for (let j = 0; j <= steps; j++) {
    fuel += j;
  }
}

if (fuel < min || min == 0) {
  min = fuel;
  console.log(min);
}
