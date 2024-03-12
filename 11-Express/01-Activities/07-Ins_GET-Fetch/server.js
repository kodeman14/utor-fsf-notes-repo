const express = require("express");
const path = require("path");
const termData = require("./db/terms.json");
const PORT = 3001;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.send("display this if no index");
});

app.get("/api/terms", (req, res) => res.json(termData));

// better error handling for html pages that already exist
app.get("*", (req, res) =>
  // res.send(
  //   `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  res.sendFile(path.join(__dirname, "public/error.html"))
);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
