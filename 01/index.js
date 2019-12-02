// Advent of Code Week One

// bring in FS module and load the data
const fs = require("fs");
const inputFile = "input.txt";

// part one
fs.readFile(inputFile, "utf8", (err, data) => {
  // split the text file on the newLine
  const parsedData = data.split("\n");
  const fuelData = parsedData.map(d => fuelCalculator(d));
  // sum up the values returned from the fuel Calc function
  const sum = fuelData.reduce((a, b) => a + b, 0);
  console.log(sum);
  return sum;
});

function fuelCalculator(d) {
  return d > 0 ? +Math.floor(+d / 3) - 2 : null;
}
