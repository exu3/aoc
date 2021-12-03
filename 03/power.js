const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

let zeroCounter = 0;
let oneCounter = 0;

let arrayG = [];
let arrayE = [];

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

    if (oneCounter > zeroCounter) {
      arrayG.push(1);
      arrayE.push(0);
    } else {
      arrayG.push(0);
      arrayE.push(1);
    }
  }

  // converts binary into decimal
  const gammaResult = parseInt(arrayG.join(""), 2);
  // console.log(gammaResult);

  const epsilonResult = parseInt(arrayE.join(""), 2);
  // console.log(epsilonResult);

  console.log("final answer (gamma * epsilon): " + gammaResult * epsilonResult);
}

Gamma();
