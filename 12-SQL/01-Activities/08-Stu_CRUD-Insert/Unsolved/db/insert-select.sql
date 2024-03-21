INSERT INTO biographies (id, name)
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

SELECT * FROM biographies;
-- * => targets all the data
-- id => just the id column

-- TODO: only print out id + name
SELECT id, name FROM biographies;
