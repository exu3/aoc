const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

// let valueIndex = 0;
// let bitIndex = 0;

let zeroCounter = 0;
let oneCounter = 0;

let arrayG = [];

function Gamma() {
  for (let bitIndex = 0; bitIndex < input[0].length; bitIndex++) {
    // console.log("calculating bit index" + bitIndex);

    // reset counters
    zeroCounter = 0;
    oneCounter = 0;

    for (let valueIndex = 0; valueIndex < input.length; valueIndex++) {
      if (parseInt(input[valueIndex][bitIndex]) == 0) zeroCounter++;
      else oneCounter++;
    }

    if (oneCounter > zeroCounter) arrayG.push(1);
    //   console.log("The common bit for bit index " + bitIndex + " is " + 1);
    else arrayG.push(0);
    // console.log("The common bit for bit index " + bitIndex + " is " + 0);
  }

  // converts binary into decimal
  const gammaResult = parseInt(arrayG.join(""), 2);
  console.log(gammaResult);

  const epsilonResult = "finish later";
}

// console.log(input[valueIndex][bitIndex]);

Gamma();

// result
// gamma: 101111111101
// epsil: 010000000010

// gamma decimal 3069
// epsil decimal 1026
