const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

let x = 0;
let y = 0;

const nestedArr = [];

for (let j = 0; j < input.length; j++) {
  let object = input[j].split(" ");
  nestedArr.push(object);
}

function move() {
  for (let i = 0; i < nestedArr.length; i++) {
    const direction = nestedArr[i][0];
    const units = parseInt(nestedArr[i][1], 10);
    if (direction == "forward") {
      x += units;
    } else if (direction == "up") {
      y -= units;
    } else if (direction == "down") {
      y += units;
    } else {
      console.log("hmmmm");
    }
  }

  console.log(x * y);
}

move();
