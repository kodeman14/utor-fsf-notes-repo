const mongoose = require("mongoose");

// Child documents or subdocuments can be embedded into a parent document
// the managerSchema defines the shape for manager subdocument
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
  role: String,
});

// The employeeScheme defines the shape for the employee subdocument
// const employeeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   salary: Number,
// });

// departmentSchema provides the shape of the parent document
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // This will add a single subdocument to include the manager's information
  manager: employeeSchema,
  // This will include an array that holds all the employees' information
  employees: [employeeSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Department = mongoose.model("Department", departmentSchema);

// Uses model to create new instance including subdocument
const managerData = { name: "Taylor", salary: 80000, role: "manager" };
const employeeData = [
  { name: "Ann", salary: 40000, role: "employee" },
  { name: "Liu", salary: 50000, role: "employee" },
];

Department.create({
  name: "Shoes",
  manager: managerData,
  employees: employeeData,
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

module.exports = Department;
