const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

let x = 0;
let y = 0;
let aim = 0;

const nestedArr = [];

for (let j = 0; j < input.length; j++) {
  let sm = input[j].split(" ");
  nestedArr.push(sm);
}

function move() {
  for (let i = 0; i < nestedArr.length; i++) {
    const direction = nestedArr[i][0];
    const units = parseInt(nestedArr[i][1], 10);
    if (direction == "forward") {
      y += aim * units;
      x += units;
    } else if (direction == "up") {
      //   y -= units;
      aim -= units;
    } else if (direction == "down") {
      //   y += units;
      aim += units;
    } else {
      console.log("hmmmm idk");
    }
  }

  console.log(x * y);
}

move();
