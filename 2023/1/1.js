// load input
import { loadText, splitByNewlines, writeToFile } from "../utils/load_doc.js";

const regexList = [
  /one/,
  /two/,
  /three/,
  /four/,
  /five/,
  /six/,
  /seven/,
  /eight/,
  /nine/,
];

const numberPairs = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const logRange = (range, array) => {
  for (let i = 0; i < range; i++) {
    console.log(array[i]);
  }
};

const getLines = (text) => {
  return splitByNewlines(text);
};

const getFirstAndLastCharacter = (text) => {
  logRange(5, text);
  const numbersOnly = text.map((line) =>
    Array.from(
      line.matchAll(
        /(?=(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))/g
      )
    ).map((res) => res.filter(Boolean))
  );
  logRange(5, numbersOnly);
  // const filtered = numbersOnly.filter((numbers) => numbers.length !== 0);
  const doubled = numbersOnly.map((numbers) =>
    numbers.length === 1 ? [numbers[0], numbers[0]] : numbers
  );
  logRange(5, doubled);
  const firstAndLastChar = doubled.map((line) => [
    line[0],
    line[line.length - 1],
  ]);
  return firstAndLastChar;
};

const toNumber = (arr) => {
  return parseInt(arr);
};

const textToNumber = (arr) => {
  return arr.map((subArr) =>
    subArr.map(
      (subArrStr) =>
        // if subArrStr is a text, return the number
        // else return the thing itself
        numberPairs[subArrStr] ?? subArrStr
    )
  );
};

const getSum = (arr) => {
  const test = arr.reduce((acc, curr) => acc + toNumber(curr[0] + curr[1]), 0);

  let test2 = 0;
  arr.forEach((subarray) => {
    test2 += toNumber(subarray[0] + subarray[1]);
  });
  return test;
};

const main = () => {
  const text = loadText("./1/input.txt");
  const lines = getLines(text);
  const firstAndLast = getFirstAndLastCharacter(lines);
  const fixed = textToNumber(firstAndLast);

  let merged = "";
  lines.map((line, idx) => {
    merged += line + ": " + fixed[idx][0] + fixed[idx][1] + "\n";
  });
  writeToFile(merged, "res.txt");

  const sum = getSum(fixed);
  console.log(sum);
};

main();
