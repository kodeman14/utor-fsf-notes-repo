const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    name: "username",
    message: "Enter a Github Username:",
  })
  .then((res) => fetch(`https://api.github.com/users/${res.username}`))
  .then((res) => res.json())
  .then((user) => console.log(user))
  // Promises execution will rout to the '.catch()' callback when an error occurs in any of the promises from before.
  .catch((err) => console.log("my err:", err));

// turn off your wifi and try the request

/**
 * .catch() is essentially a .then() for errors only
 */
