const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf8").split("\n");

const inputArray2 = [];

for (let j = 0; j < input.length; j++) {
  inputArray2.push(input[j]);
}

let zeroCounter = 0;
let oneCounter = 0;

let arrayG = [];
let arrayE = [];

let arrayOzero = [];
let arrayOone = [];
let arrayC = [];

// after finding common value, array remove the ones that are not in that value

// alternatively, push into different arrays and compare the lengths of each array after

function Oxygen() {
  for (let bitIndex = 0; bitIndex < input[0].length; bitIndex++) {
    // console.log("calculating bit index" + bitIndex);

    // reset counters
    zeroCounter = 0;
    oneCounter = 0;

    for (let valueIndex = 0; valueIndex < input.length; valueIndex++) {
      if (parseInt(input[valueIndex][bitIndex]) == 0) {
        zeroCounter++;
        arrayOzero.push(input[valueIndex][bitIndex]);
      } else {
        oneCounter++;
        arrayOone.push(input[valueIndex][bitIndex]);
      }
    }

    // this block filters the array to only include the values with the bit value at said index

    // if (zeroCounter > oneCounter) {
    //   console.log("value 0 is most common for this bit: " + bitIndex);
    //   arrayO = input.filter(() => input[valueIndex][bitIndex] == 0);
    // } else if (zeroCounter == oneCounter) {
    //   console.log("same");
    //   arrayO = input.filter(() => input[valueIndex][bitIndex] == 1);
    // } else {
    //   console.log("value 1 is most common for this bit: " + bitIndex);
    //   arrayO = input.filter(() => input[valueIndex][bitIndex] == 1);
    // }

    // console.log(arrayO);

    if (arrayOzero.length > arrayOone.length) {
      console.log(
        "the zero value is more common in this bit index " + bitIndex
      );
    } else {
      console.log(
        "the one value is more common here in the bit index " + bitIndex
      );
    }
  } // end of first for loop
}

Oxygen();

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

// Gamma();
