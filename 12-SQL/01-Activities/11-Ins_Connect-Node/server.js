const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER || "root",
    // MySQL password
    password: process.env.DB_PASS || "",
    database: "classlist_db2",
  },
  console.log(`Connected to the classlist_db2 database.`)
);

app.get("/api/students", (req, res) => {
  // Query database
  db.query("SELECT * FROM students", function (err, results) {
    if (err) {
      res.send(err);
      return;
    }
    res.status(200).json(results);
    // console.log("hello", results);
    // console.log("err", err);
  });
});

app.post("/api/students", (req, res) => {
  // Query database
  const { fName, lName, enrolled } = req.body;
  // console.log()
  db.query(
    `INSERT INTO students (first_name, last_name, enrolled) VALUES ("${fName}", "${lName}", ${enrolled})`,
    function (err, result) {
      if (err) {
        res.send(err);
        return;
      }
      res.status(200).json(result);
    }
  );
});

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
