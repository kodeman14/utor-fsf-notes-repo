const express = require("express");
const db = require("./config/connection");
// Require model
const { Item } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/sum-price", async (req, res) => {
  try {
    // Call aggregate() on model
    const result = await Item.aggregate([
      // Where prices are less or equal to 5
      { $match: { price: { $and: [{ $gte: 2 }, { $lte: 5 }] } } },
      // { $match: { price: { $lte: 5 } } },
      {
        $group: {
          // Group by null (no additional grouping by id)
          _id: null,
          // Sum of all prices
          sum_price: { $sum: "$price" },
          // Average of all prices
          avg_price: { $avg: "$price" },
          // Maximum price
          max_price: { $max: "$price" },
          // Minimum price
          min_price: { $min: "$price" },
        },
      },
    ]);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
