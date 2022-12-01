const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf8").split("\n");

const arrayG = [];
const arrayE = [];

let zeroCounter = 0;
let oneCounter = 0;

for (let bitIndex = 0; bitIndex < input[0].length; bitIndex++) {
  // console.log("calculating bit index" + bitIndex);

  // reset counters
  zeroCounter = 0;
  oneCounter = 0;

  for (let valueIndex = 0; valueIndex < input.length; valueIndex++) {
    if (parseInt(input[valueIndex][bitIndex]) == 0) zeroCounter++;
    else oneCounter++;
  }

  if (oneCounter > zeroCounter) {
    arrayG.push(1);
    arrayE.push(0);
  } else {
    arrayG.push(0);
    arrayE.push(1);
  }
}

let mostCommon = arrayE[0];

let j = 0;
while (j < input.length) {
  // if (input[j][0] !== mostCommon) {
  //   input.splice(j, 1);
  //   console.log("spliced ", input[j]);
  // }
  let result = input.filter((value) => value[j] == mostCommon);
  j++;
  console.log(result);
}

console.log(mostCommon);

console.log(input); // most common value in each bit index. so the most common value in bit index 0 is 0
