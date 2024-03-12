// TODO: Import express
// TODO: Import 'terms.json' file
const express = require("express");
const termsJson = require("./terms.json");
// const whatJson = require("../Unsolved/terms.json");

const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// no need to serve up any static content

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get("/api", (req, res) => res.json(termsJson));
// app.get("/api", (req, res) => res.json("terms.json"));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
