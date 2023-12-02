const fs = require("fs");

let stacks = [];

const setup = () => {
  for (let i = 0; i < 9; i++) {
    stacks.push([]);
  }
};

const getRealIndex = (letterPos) => {
  return Math.floor(letterPos / 4);
};

const parseStackRow = (dataString) => {
  [...dataString].forEach((letter, idx) => {
    if (letter !== "[" && letter !== "]" && letter !== " ") {
      stacks[getRealIndex(idx)].push(letter);
    }
  });
};

const readInstruction = (instructionString) => {
  let quantity = [...instructionString.matchAll(/\d+/g)];

  applyInstruction(quantity[0][0], quantity[1][0], quantity[2][0]);
};

const applyInstruction = (quantity, from, to) => {
  let crates = stacks[from - 1].splice(
    stacks[from - 1].length - quantity,
    stacks[from - 1].length
  );
  stacks[to - 1] = stacks[to - 1].concat(crates);
};

fs.readFile("./input.txt", "ascii", (err, data) => {
  setup();
  let readData = data.split("\n");
  for (let i = 7; i >= 0; i--) {
    parseStackRow(readData[i]);
  }
  console.log(stacks);

  for (let i = 10; i < readData.length; i++) {
    readInstruction(readData[i]);
  }
  console.log(stacks);

  let solution = "";
  for (let i = 0; i <= 8; i++) {
    solution += stacks[i].pop();
  }
  console.log(solution);
});
