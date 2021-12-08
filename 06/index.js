/**
 * let's precalculate all the values
 * so find the numebr of days that this will be. 80 days
 * then determine fish list:
 *  if the ANY of the fish is greater than zero, subtract one
 *  if the ANY of the fish fish is zero, set the index equal to 6
 *    then array push as many 8s as the end as there were zeros
 */

/**
 * what does the javascript forEach method do?????? how do i use it?
 * https://hackclub.slack.com/archives/C020LT3UCBW/p1638776533346100
 */

const fs = require("fs");
const input = fs.readFileSync("example.txt", "utf-8").split(",");

for (let j = 0; j < input.length; j++) {
  input[j] = parseInt(input[j]);
}

console.log("initial input", input);

for (let k = 0; k <= 18; k++) {
  if (input[k] == 0) {
    input[k] == 6;
    input.push(8);
  } else if (input[k] != 0) {
    input[k] -= 1;
  } else {
    console.log("errrrrrooror");
  }
}

/**
 * 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8
 */

console.log(input);
