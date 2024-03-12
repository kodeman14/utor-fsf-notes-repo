// Import Express.js
const express = require("express");

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require("path");

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static("public"));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get("/", (req, res) => res.send("why are you doing this incorrectly"));
// don't have to specify anything for base route because of "index.html"

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/sendFile.html"))
);

app.get("/routes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/routes.html"))
);

console.log("hello");

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`whatever app listening at http://localhost:${PORT}`)
);
