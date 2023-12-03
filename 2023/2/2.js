import { loadText, splitByNewlines } from "../utils/load_doc.js";

const regGreen = /(\d+)\s+green/g;
const regRed = /(\d+)\s+red/g;
const regBlue = /(\d+)\s+blue/g;

const calcGames = (games) => {
  const result = games.map((game) => {
    // one game with multiple rounds
    const id = game.split(" ")[1].split(":")[0];
    console.log("id:", id);
    console.log(
      Array.from(game.matchAll(regRed))
        .map((thing) => thing[1])
        .map((a) => parseInt(a) > 12)
        .reduce((acc, curr) => acc === curr, true)
    );

    if (
      Array.from(game.matchAll(regRed))
        .map((thing) => thing[1])
        .map((a) => parseInt(a) > 12)
        .reduce((acc, curr) => acc === curr, true)
    )
      return null;
    if (
      Array.from(game.matchAll(regGreen))
        .map((thing) => thing[1])
        .map((a) => parseInt(a) > 13)
        .reduce((acc, curr) => acc === curr, true)
    )
      return null;
    if (
      Array.from(game.matchAll(regBlue))
        .map((thing) => thing[1])
        .map((a) => parseInt(a) > 14)
        .reduce((acc, curr) => acc === curr, true)
    )
      return null;
    return id;
  });
  return result.filter(Boolean);
};

const main = () => {
  const text = loadText("./2/input.txt");
  const lines = splitByNewlines(text);
  const res = calcGames(lines);
  console.log(res);
  const final = res.reduce((acc, curr) => (acc += parseInt(curr)), 0);
  console.log(final);
};

main();
