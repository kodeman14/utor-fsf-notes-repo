const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

userSchema
  .virtual("fullName")
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (nameValue) {
    // eg: nameValue = "abc xyz"
    // our goal is to set "first" and "last" from "full name"
    // where is full name coming from => function parameter
    const fName = nameValue.split(" ")[0]; // abc
    const lName = nameValue.split(" ")[1]; // xyz
    this.set({ first: fName, last: lName });
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
