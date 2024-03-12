const express = require("express");

const PORT = 3001;
const reviews = require("./db/reviews");

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get("/api/reviews", (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews);
});

// POST request to add a review
app.post("/api/reviews", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (
    req.body &&
    req.body.product &&
    req.body.product.length > 2 &&
    req.body.rating > -1
  ) {
    response = {
      status: "success",
      data: req.body,
    };
    res.json(`Review for ${JSON.stringify(response.data)} has been added!`);
    // right now, we're not adding to the reviews js file (yet)
  } else {
    res.json("Something is wrong with the response you have added");
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
