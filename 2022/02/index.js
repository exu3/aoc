const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

console.log(input);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ");
}

// [ [ 'A', 'Y' ], [ 'B', 'X' ], [ 'C', 'Z' ] ]

// opponent: 1st column, me: second column
// opponent: A for Rock, B for Paper, and C for Scissors
//  me: X for Rock, Y for Paper, and Z for Scissors

// The score for a single round is the score for the shape you selected
// (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the
// outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// takes in an array of 2 elements
function match(match) {
  let opponent = match[0];
  let me = match[1];
  let score = 0;
  // case: draw
  if (
    (opponent === "A" && me === "X") ||
    (opponent === "B" && me === "Y") ||
    (opponent === "C" && me === "Z")
  ) {
    score += 3;
    console.log("added 3 for draw");

    // score for shape
    if (me === "X") {
      score += 1;
      console.log("+1 for shape");
    }
    if (me === "Y") {
      score += 2;
      console.log("+2 for shape");
    }
    if (me === "Z") {
      score += 3;
      console.log("+3 for shape");
    }
  }

  // case: I win
  if (
    (opponent === "A" && me === "Y") ||
    (opponent === "B" && me === "Z") ||
    (opponent === "C" && me === "X")
  ) {
    score += 6;
    console.log("added 6 for win");

    // score for shape
    if (me === "X") {
      score += 1;
      console.log("+1 for shape");
    }
    if (me === "Y") {
      score += 2;
      console.log("+2 for shape");
    }
    if (me === "Z") {
      score += 3;
      console.log("+3 for shape");
    }
  }

  // case: I lose
  if (
    (opponent === "A" && me === "Z") ||
    (opponent === "B" && me === "X") ||
    (opponent === "C" && me === "Y")
  ) {
    score += 0;
    console.log("added 0 for loss");

    // score for shape
    if (me === "X") {
      score += 1;
      console.log("+1 for shape");
    }
    if (me === "Y") {
      score += 2;
      console.log("+2 for shape");
    }
    if (me === "Z") {
      score += 3;
      console.log("+3 for shape");
    }
  }
  return score;
}

let totalScore = 0;
for (let j = 0; j < input.length; j++) {
  totalScore += match(input[j]);
}

console.log(totalScore);
