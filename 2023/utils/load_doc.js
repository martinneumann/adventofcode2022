import * as fs from "fs";

export const loadText = (filepath) => {
  console.log("Reading input");
  return fs.readFileSync(filepath).toString();
};

export const splitByNewlines = (text) => {
  return text.split("\n");
};

export const writeToFile = (input, path) => {
  fs.writeFileSync(path, input);
};
