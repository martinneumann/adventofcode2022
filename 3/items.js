const fs = require("fs");

let prio = 0;
fs.readFile("./input.txt", "ascii", (err, data) => {
  let readData = data.split("\n");
  for (let a = 0; a < readData.length; a += 3) {
    for (let b = 0; b < readData[a].length; b++) {
      if (
        readData[a + 1].includes(readData[a][b]) &&
        readData[a + 2].includes(readData[a][b])
      ) {
        console.log(readData[a][b]);
        prio += getPrio(readData[a][b]);
        break;
      }
    }
  }

  console.log(prio);
});
function getPrio(char) {
  if (char === char.toLowerCase()) {
    return parseInt(char.charCodeAt(0) - 96);
  } else {
    return parseInt(char.charCodeAt(0) - 92 + 27 + 27);
  }
}
