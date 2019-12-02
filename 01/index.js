// Advent of Code Week One

// bring in FS module and load the data
const fs = require("fs");
const inputFile = "input.txt";

// part one
fs.readFile(inputFile, "utf8", (err, data) => {
  // split the text file on the newLine
  const parsedData = data.split("\n");
  const fuelData = parsedData.map(d => loopValue(d));
  // sum up the values returned from the fuel Calc function
  const sum = fuelData.reduce((a, b) => a + b, 0);
  //   console.log(loopValue(1969));
  console.log(sum);
  //   return sum;
});

function fuelCalculator(d) {
  return d > 0 ? +Math.floor(+d / 3) - 2 : null;
}

const loopValue = function calcValue(d, storeValues) {
  let arr = storeValues || [];
  if (d > 6) {
    const newValue = d > 0 ? +Math.floor(+d / 3) - 2 : null;
    arr.push(newValue);
    return loopValue(newValue, arr);
  } else {
    return arr.reduce((a, b) => a + b, 0);
  }
};
