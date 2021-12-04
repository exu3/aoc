const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf8").split("\n");

let zeroCounter = 0;
let oneCounter = 0;

let arrayG = [];
let arrayE = [];

let arrayO = [];
let arrayC = [];

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
  console.log("gamma", arrayG.join(""));

  const epsilonResult = parseInt(arrayE.join(""), 2);
  console.log("epsilon", arrayE.join(""));

  console.log("final answer (gamma * epsilon): " + gammaResult * epsilonResult);

  function Oxygen() {
    for (let valueIndex = 0; valueIndex < input.length - 1; valueIndex++) {
      for (let bitIndex = 0; bitIndex < input[0].length; bitIndex++) {
        for (let m = 0; m < arrayG.length; m++) {
          let commonValue = parseInt(arrayG[m]);

          if (parseInt(input[valueIndex][bitIndex]) != commonValue) {
            // errors here for some reason ^^^
            input.splice(valueIndex, 1);
            console.log(input);
          } else {
            console.log("No change, but here's the array: " + input);
          }
        }
      }
    }
    console.log(input);
  }
  Oxygen();
}

Gamma();
