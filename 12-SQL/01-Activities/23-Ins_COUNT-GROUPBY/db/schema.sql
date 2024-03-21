DROP DATABASE IF EXISTS courses_db2;
CREATE DATABASE courses_db2;

USE courses_db2;

CREATE TABLE course_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INT,
  total_enrolled INT
)
