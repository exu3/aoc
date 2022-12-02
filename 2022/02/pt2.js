const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

console.log(input);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ");
  input[i].push(myShape(input[i][0], input[i][1]));
}

console.log(input);

// choose shape according to second column
// X means you need to lose,
// Y means you need to end the round in a draw,
// and Z means you need to win.

function myShape(opponentShape, outcome) {
  // win case
  if (outcome == "Z") {
    if (opponentShape == "A") {
      // rock
      return "Y"; // paper
    }
    if (opponentShape == "B") {
      // paper
      return "Z"; // scissors
    }
    if (opponentShape == "C") {
      // scissors
      return "X"; // rock
    }
  }

  // loss case
  if (outcome == "X") {
    if (opponentShape == "A") {
      // rock
      return "Z"; // scissors
    }
    if (opponentShape == "B") {
      // paper
      return "X"; // rock
    }
    if (opponentShape == "C") {
      // scissors
      return "Y"; // paper
    }
  }

  // draw case
  if (outcome == "Y") {
    if (opponentShape == "A") {
      // rock
      return "X"; // rock
    }
    if (opponentShape == "B") {
      // paper
      return "Y"; // paper
    }
    if (opponentShape == "C") {
      // scissors
      return "Z"; // scissors
    }
  }
}

// score calculation code takes in an array of 3 elements:
// opponent, how to end the match, and my shape

function match(match) {
  let opponent = match[0];
  let me = match[2];
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
