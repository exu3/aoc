const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let arrayOfSameChars = [];

for (let i = 0; i < input.length; i++) {
  // split each string in half
  const firstHalf = input[i].slice(0, input[i].length / 2);
  const secondHalf = input[i].slice(input[i].length / 2);

  arrayOfSameChars.push(findSameChar(firstHalf, secondHalf));
}

// console.log(arrayOfSameChars);

function findSameChar(firstHalf, secondHalf) {
  for (let j = 0; j < firstHalf.length; j++) {
    let sameChar = firstHalf[j];
    for (let k = 0; k < secondHalf.length; k++) {
      if (sameChar === secondHalf[k]) {
        // console.log(sameChar);
        return sameChar;
      }
    }
  }
}

// enum for letters
const priority = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

// calculate sum based on priority
function calculateSum(arrayOfSameChars) {
  let sum = 0;
  for (let i = 0; i < arrayOfSameChars.length; i++) {
    sum += priority[arrayOfSameChars[i]];
  }
  return sum;
}

// console.log(calculateSum(arrayOfSameChars));

// part 2
// find same character in 3 different elements
function findBadge(elf1, elf2, elf3) {
  for (let i = 0; i < elf1.length; i++) {
    let sameChar = elf1[i];
    for (let j = 0; j < elf2.length; j++) {
      if (sameChar === elf2[j]) {
        for (let k = 0; k < elf3.length; k++) {
          if (sameChar === elf3[k]) {
            return sameChar;
          }
        }
      }
    }
  }
}

let arrayOfBadges = [];
for (let a = 0; a < input.length; a += 3) {
  const elf1 = input[a];
  const elf2 = input[a + 1];
  const elf3 = input[a + 2];
  arrayOfBadges.push(findBadge(elf1, elf2, elf3));
}

console.log(calculateSum(arrayOfBadges));
