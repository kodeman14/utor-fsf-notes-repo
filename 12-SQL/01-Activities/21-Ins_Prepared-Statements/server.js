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
    user: "root",
    // MySQL password
    password: "",
    database: "courses_db2",
  },
  console.log(`Connected to the courses_db2 database.`)
);

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
app.delete("/api/course/:id", (req, res) => {
  // const {id} = req.params;
  // const course_id = req.params.id
  const idToTrack = Math(req.params.id);
  db.query(
    `DELETE FROM course_names WHERE id = ?`,
    idToTrack,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.status(204).json(result);
    }
  );
});

// app.get("/api/course/:id", (req, res) => {
//   // Query database
//   db.query(`SELECT ? FROM course_names WHERE id = ?`, name, req.params.id, function (err, results) {
//     // if err do something
//     res.status(200).json(results);
//   });
// });

app.get("/api/courses", (req, res) => {
  // Query database
  db.query("SELECT * FROM course_names", function (err, results) {
    // if err do something
    res.status(200).json(results);
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
