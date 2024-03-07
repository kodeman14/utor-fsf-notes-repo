const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    name: "username",
    message: "Enter a Github Username:",
  })
  // promises are chained to directly pass inquirer data into fetch request
  // .then((res) => fetch(`http:/api.github.com/users/${res.username}`))
  .then((res) => fetch(`whatever`))
  // promises are chained to parse the request for the json data
  .then((res) => res.json())
  // .then((data) => data.json())
  // json data is accepted as user and logged to the console
  .then((data) => console.log(data))
  .catch((err) => console.log("my err:", err));
