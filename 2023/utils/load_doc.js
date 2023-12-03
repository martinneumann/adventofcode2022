import * as fs from "fs";

export const loadText = (filepath) => {
  console.log("Reading input");
  return fs.readFileSync(filepath).toString();
};

export const splitByNewlines = (text) => {
  return text.split("\n");
};

export const splitByChar = (text, char) => {
  return text.split(char);
};

export const writeToFile = (input, path) => {
  fs.writeFileSync(path, input);
};
