const fs = require("fs");

let total = 0;

fs.readFile("./input.txt", "ascii", (err, data) => {
  let readData = data.split("\n");
  readData.forEach((row) => {
    let sets = row.split(",");
    let parsed = [];
    sets.forEach((set) => parsed.push(set.split("-")));
    parsed = parsed.map((x) => x.map((y) => parseInt(y)));

    if (
      parsed[0][0] <= parsed[1][0] &&
      parsed[0][1] >= parsed[1][0] &&
      parsed[0][1] <= parsed[1][1]
    ) {
      total += 1;
    } else if (
      parsed[0][0] >= parsed[1][0] &&
      parsed[0][1] >= parsed[1][1] &&
      parsed[0][0] <= parsed[1][1]
    ) {
      total += 1;
    } else if (
      parsed[0][0] >= parsed[1][0] &&
      parsed[0][1] <= parsed[1][1] &&
      parsed[0][1] >= parsed[1][0] &&
      parsed[0][0] <= parsed[1][1]
    ) {
      total += 1;
    } else if (
      parsed[0][0] <= parsed[1][0] &&
      parsed[0][1] >= parsed[1][1] &&
      parsed[0][1] >= parsed[1][0] &&
      parsed[0][0] <= parsed[1][1]
    ) {
      total += 1;
    } else console.log(parsed);
  });

  console.log(total);
});

/**
 * 1st left from second
 * xxxxxx(xxx)
 *   xxxxxx
 *
 * 1st right form second
 *    xxxx
 * xxxxx
 *
 *   xx
 * xxxxxx
 *
 * xxxxxx
 *   xx
 * error
 * xxx
 *       xxx
 *
 * error
 *       xxxxx
 * xxx
 *
 */
