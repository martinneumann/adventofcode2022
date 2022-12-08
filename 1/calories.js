const fs = require("fs");

fs.readFile("./input.txt", "ascii", (err, data) => {
  elves = [];
  data.split("\n\n").forEach((elf) => {
    elves.push(
      elf.split("\n").reduce((prev, acc = 0) => parseInt(prev) + parseInt(acc))
    );
  });
  elves.sort((a, b) => b - a);
  sum = elves.slice(0, 3).reduce((prev, acc) => parseInt(prev) + parseInt(acc));
  console.log(elves[0], elves[1], elves[2]);
  console.log(sum);
});
