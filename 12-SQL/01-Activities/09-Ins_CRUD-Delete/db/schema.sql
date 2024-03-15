-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db2;
-- Creates the inventory_db database --
CREATE DATABASE inventory_db2;

-- use inventory_db database --
USE inventory_db2;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);

-- Insert multiple produce items --
INSERT INTO produce (id, name)
VALUES
    ( 1, "apple"),
    ( 2, "orange"),
    ( 3, "banana");
    
-- SELECT * FROM produce;
    
