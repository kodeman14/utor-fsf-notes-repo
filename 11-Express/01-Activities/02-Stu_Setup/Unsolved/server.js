const exp = require("constants");
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8005;

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static("public"));

app.get("/", (req, res) => res.send("whatever you want to say"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/send.html"))
);

// TODO: Create a route that will serve up the `public/paths.html` page
app.get("/paths", (req, res) =>
  res.sendFile(path.join(__dirname, "public/paths.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
