const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
    {
      type: "input",
      message: "What is the email?",
      name: "email",
    },
  ])
  .then((answers) => {
    answers.confirm === answers.password
      ? console.log(`Success! ${answers.username} is created`)
      : console.log("You forgot your password already?!");

    if (answers.confirm === answers.password) {
      // TODO: watch out for duplicate users
      // probably have to read file first
      // if user exists, print message and exit
      // if user doesn't, then continue below
      fs.appendFile(
        "users.txt",
        `${answers.username} - ${answers.email}\n`,
        (err) => {
          if (err) {
            console.log(err);
          } else console.log("user added to database");
        }
      );
    }
  });
