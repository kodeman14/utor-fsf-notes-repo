const express = require("express");
const db = require("./config/connection");

const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/all-books", async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/sum-price", async (req, res) => {
  try {
    const result = await Book.aggregate([
      {
        $group: {
          _id: null,
          sum_price: { $sum: "$price" },
          avg_price: { $avg: "$price" },
          max_price: { $max: "$price" },
          min_price: { $min: "$price" },
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
