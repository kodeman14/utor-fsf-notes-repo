// Define Mongoose
const mongoose = require("mongoose");

// Create a new instance of the Mongoose schema to define shape of each document
const grocerySchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  item: { type: String, required: true },
  // stockCount: { type: Number },
  stockCount: Number,
  price: { type: Number, required: false },
  inStock: Boolean,
  // Use built in date method to get current date
  // lastAccessed: { type: Date, default: Date.now },
  lastAccessed: Date,
});

// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Item = mongoose.model("Item", grocerySchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// We use the model to create individual documents that have the properties as defined in our schema
Item.create([
  {
    item: "banana",
    stockCount: 10,
    price: 1,
    inStock: true,
  },
  { item: "tomato", stockCount: 20, price: 2, inStock: true },
])
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

module.exports = Item;
