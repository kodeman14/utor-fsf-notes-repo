const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });
// const hbs = exphbs.create({});

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// body parsing on post/put/delete/patch requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is to connect css and js files for our browser
app.use(express.static(path.join(__dirname, 'public')));

// controllers which are used for user interaction
app.use(routes);

// start your server ("force" is to renew the db)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
