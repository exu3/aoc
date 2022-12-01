const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("\n");
  //   console.log(input);
}

let heaviest = 0;
// pt1: find the sum of the most caloric pack
for (let j = 0; j < input.length; j++) {
  let sum = 0;
  for (let k = 0; k < input[j].length; k++) {
    sum += parseInt(input[j][k]);
    // console.log(sum);
    if (sum > heaviest) {
      heaviest = sum;
    }
  }
}
console.log("most cals:", heaviest);

// pt2: find the sum of the top 3 most caloric packs
let packSums = [];
for (let j = 0; j < input.length; j++) {
  let sum = 0;
  for (let k = 0; k < input[j].length; k++) {
    sum += parseInt(input[j][k]);
    // console.log(sum);
    if (sum > heaviest) {
      heaviest = sum;
    }
  }
  packSums.push(sum);
}

console.log(packSums);

// sort packSums in descending order
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const topThree = bubbleSort(packSums).slice(0, 3);
console.log("top three:", topThree);

// find the sum of the top three
let sumOfTop3 = 0;
for (let i = 0; i < topThree.length; i++) {
  sumOfTop3 += topThree[i];
}
console.log("sum of top three:", sumOfTop3);
