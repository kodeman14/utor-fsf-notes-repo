DROP DATABASE IF EXISTS classlist_db2;
CREATE DATABASE classlist_db2;

USE classlist_db2;

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  enrolled BOOLEAN NOT NULL
);
