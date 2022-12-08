const fs = require("fs");

fs.readFile("./input.txt", "ascii", (err, data) => {
  totalScore = 0;
  data.split("\n").forEach((element) => {
    console.log(element);
    // lose
    if (element[2] === "X") {
      if (element[0] === "A") {
        totalScore += 3;
      }
      if (element[0] === "B") {
        totalScore += 1;
      }
      if (element[0] === "C") {
        totalScore += 2;
      }
    }
    // draw
    if (element[2] === "Y") {
      totalScore += 3;
      if (element[0] === "A") {
        totalScore += 1;
      }
      if (element[0] === "B") {
        totalScore += 2;
      }
      if (element[0] === "C") {
        totalScore += 3;
      }
    }
    // win
    if (element[2] === "Z") {
      totalScore += 6;
      if (element[0] === "A") {
        totalScore += 2;
      }
      if (element[0] === "B") {
        totalScore += 3;
      }
      if (element[0] === "C") {
        totalScore += 1;
      }
    }
  });

  console.log(totalScore);
});
