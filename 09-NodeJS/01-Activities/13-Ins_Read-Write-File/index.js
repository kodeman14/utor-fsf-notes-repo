// fs is a Node standard library package for reading and writing files
const fs = require("fs");

// readFile(fileName, encodingType, () => {})
// writeFile(fileName, valueToAdd, () => {})
// appendFile(fileName, valueToAdd, () => {})

const readCallback = (err, data) => {
  if (err) return err;
  const dataArr = data.split(",");
  console.log(dataArr);
};

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data/data.csv", "utf8", readCallback);

const writeCallback = (err) =>
  err ? console.error(err) : console.log("Success!");

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile("data/log.txt", process.argv[2], writeCallback);
