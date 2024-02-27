// TODO: What are we importing?
const fs = require("fs");

// TODO: Add comments to explain each of the three arguments of appendFile()
// fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log("Commit logged!")
// );

fs.appendFile("log.txt", `${process.argv[2]}\n`, function (err) {
  // TODO: Describe how this ternary operator works
  // err ? console.error(err) : console.log("Commit logged!");
  if (err) {
    console.log(err);
  } else console.log("success");
});

for (let i = 2; i < process.argv.length; i++) {
  fs.appendFile("loopArr.txt", `${process.argv[i]}\n`, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log("Commit logged!")
  );
}
