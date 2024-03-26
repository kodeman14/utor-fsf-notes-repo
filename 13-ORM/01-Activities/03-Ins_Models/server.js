const express = require('express');
require('dotenv').config();

const sequelize = require('./config/connection');

// Import model to sync table with database
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || process.env.DB_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
